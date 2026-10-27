import { useId, useRef, useState } from "react";
import { services } from "../data/content";
import { company } from "../data/site";
import Icon from "./Icon";

// Enquiries are not sent by the site. Submitting opens a pre-filled email
// to company.enquiryEmail, which the visitor sends from their own account.
function buildEmail(values) {
  const orDash = (value) => value.trim() || "—";
  const subject = `Security enquiry: ${values.service} (${values.fullName.trim()})`;
  const body = [
    `Full name: ${values.fullName.trim()}`,
    `Company: ${orDash(values.company)}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Service required: ${values.service}`,
    `Location: ${orDash(values.location)}`,
    "",
    "Message:",
    values.message.trim(),
  ].join("\n");

  const to = company.enquiryEmail;
  const gmail = `https://mail.google.com/mail/?${new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
    su: subject,
    body,
  })}`;
  const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return { gmail, mailto };
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s().-]+$/;

const initialValues = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  location: "",
  message: "",
};

const serviceOptions = [
  ...services.map((service) => service.title),
  "Other / not sure yet",
];

function validate(values) {
  const errors = {};
  const email = values.email.trim();
  const phone = values.phone.trim();
  const phoneDigits = phone.replace(/\D/g, "");
  const message = values.message.trim();

  if (values.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }
  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address, such as name@company.com.";
  }
  if (!phone) {
    errors.phone = "Please enter a phone number.";
  } else if (
    !PHONE_PATTERN.test(phone) ||
    phoneDigits.length < 7 ||
    phoneDigits.length > 15
  ) {
    errors.phone = "Please enter a valid phone number, including the area or country code.";
  }
  if (!values.service) {
    errors.service = "Please choose the service you need.";
  }
  if (!message) {
    errors.message = "Please tell us about your requirements.";
  } else if (message.length < 20) {
    errors.message = "Please add a little more detail (at least 20 characters).";
  }
  return errors;
}

function ContactDetails() {
  const { phone, email, address } = company.contact;
  if (!phone && !email && !address) return null;

  return (
    <ul className="contact-details">
      {phone && (
        <li>
          <Icon name="phone" size={20} />
          <a href={`tel:${phone.replace(/[^\d+]/g, "")}`}>{phone}</a>
        </li>
      )}
      {email && (
        <li>
          <Icon name="mail" size={20} />
          <a href={`mailto:${email}`}>{email}</a>
        </li>
      )}
      {address && (
        <li>
          <Icon name="pin" size={20} />
          <span>{address}</span>
        </li>
      )}
    </ul>
  );
}

function Field({ id, label, error, required, optional, children }) {
  return (
    <div className={`field${error ? " has-error" : ""}`}>
      <label htmlFor={id}>
        {label}
        {required && <span className="field-required" aria-hidden="true"> *</span>}
        {optional && <span className="field-optional"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="field-error">
          {error}
        </p>
      )}
    </div>
  );
}

function Contact({ serviceRequest }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [draft, setDraft] = useState(null);
  const [lastRequest, setLastRequest] = useState(serviceRequest);
  const formRef = useRef(null);
  const uid = useId();

  // Pre-select a service when a visitor clicks "Enquire about …".
  if (serviceRequest !== lastRequest) {
    setLastRequest(serviceRequest);
    if (serviceRequest) {
      setValues((current) => ({ ...current, service: serviceRequest.service }));
      setErrors((current) => ({ ...current, service: undefined }));
    }
  }

  const fieldId = (name) => `${uid}-${name}`;

  const fieldProps = (name) => ({
    id: fieldId(name),
    name,
    value: values[name],
    onChange: (event) => {
      const next = { ...values, [name]: event.target.value };
      setValues(next);
      if (touched[name]) setErrors(validate(next));
      setDraft(null);
    },
    onBlur: () => {
      setTouched((current) => ({ ...current, [name]: true }));
      setErrors(validate(values));
    },
    "aria-invalid": errors[name] && touched[name] ? true : undefined,
    "aria-describedby": errors[name] && touched[name] ? `${fieldId(name)}-error` : undefined,
  });

  const shownError = (name) => (touched[name] ? errors[name] : undefined);

  function handleSubmit(event) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched(Object.fromEntries(Object.keys(initialValues).map((key) => [key, true])));

    const firstInvalid = Object.keys(initialValues).find((key) => found[key]);
    if (firstInvalid) {
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const email = buildEmail(values);
    setDraft(email);
    // Called directly in the submit handler so pop-up blockers allow it.
    window.open(email.gmail, "_blank", "noopener");
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="section-title">
            Tell us about your site.
          </h2>
          <p className="section-intro">
            Share a few details about your premises and what you need. Our team
            will review your enquiry and respond to discuss the next steps.
          </p>
          <h3 className="contact-subtitle">Helpful details to include</h3>
          <ul className="check-list">
            <li><Icon name="check" size={18} />The type of premises and its location</li>
            <li><Icon name="check" size={18} />Hours or shifts you need covered</li>
            <li><Icon name="check" size={18} />Any specific concerns or past incidents</li>
            <li><Icon name="check" size={18} />Your preferred start date</li>
          </ul>
          <ContactDetails />
        </div>

        <form
          ref={formRef}
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
          aria-describedby={`${uid}-required-note`}
        >
          <p id={`${uid}-required-note`} className="form-note">
            Fields marked <span aria-hidden="true">*</span> are required.
          </p>

          <div className="form-grid">
            <Field id={fieldId("fullName")} label="Full name" required error={shownError("fullName")}>
              <input type="text" autoComplete="name" required {...fieldProps("fullName")} />
            </Field>
            <Field id={fieldId("company")} label="Company name" optional>
              <input type="text" autoComplete="organization" {...fieldProps("company")} />
            </Field>
            <Field id={fieldId("email")} label="Email address" required error={shownError("email")}>
              <input type="email" autoComplete="email" inputMode="email" required {...fieldProps("email")} />
            </Field>
            <Field id={fieldId("phone")} label="Phone number" required error={shownError("phone")}>
              <input type="tel" autoComplete="tel" inputMode="tel" required {...fieldProps("phone")} />
            </Field>
            <Field id={fieldId("service")} label="Service required" required error={shownError("service")}>
              <select required {...fieldProps("service")}>
                <option value="">Select a service</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
            <Field id={fieldId("location")} label="Location" optional>
              <input type="text" autoComplete="address-level2" placeholder="City or site address" {...fieldProps("location")} />
            </Field>
            <div className="form-span">
              <Field id={fieldId("message")} label="Message" required error={shownError("message")}>
                <textarea rows="5" required placeholder="Tell us about your site and requirements" {...fieldProps("message")} />
              </Field>
            </div>
          </div>

          <div className="form-footer">
            <button type="submit" className="btn btn--primary btn--lg">
              Send Enquiry
            </button>
            <p className="form-hint">
              Opens Gmail with your enquiry filled in, ready for you to send.
            </p>
          </div>

          <div className="form-status" role="status" aria-live="polite">
            {draft && (
              <p className="notice notice--success">
                Your enquiry is ready in Gmail. Press <strong>Send</strong> there
                to deliver it to our team. Gmail didn&rsquo;t open, or you use
                another email app?{" "}
                <a href={draft.mailto}>Open it in your default email app</a>.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
