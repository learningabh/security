import lockup from "../assets/images/krg-lockup.png";
import upgrate from "../assets/images/upgrate.png";
import { services } from "../data/content";
import { company, navLinks } from "../data/site";

function Footer() {
  const { phone, email, address } = company.contact;
  const { privacyUrl, termsUrl } = company.legal;
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <img
              src={lockup}
              alt={`${company.name} logo`}
              style={{borderRadius:"10px"}}              
              width="440"
              height="324"
              loading="lazy"
              
            />
          </a>
          <p>{company.description}</p>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <h2 className="footer-heading">Navigate</h2>
          <ul>
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h2 className="footer-heading">Services</h2>
          <ul>
            {services.map((service) => (
              <li key={service.title}>
                <a href="#services">{service.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-heading">Contact</h2>
          <ul>
            {phone && (
              <li>
                <a href={`tel:${phone.replace(/[^\d+]/g, "")}`}>{phone}</a>
              </li>
            )}
            {email && (
              <li>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            )}
            {address && <li>{address}</li>}
            <li>
              <a href="#contact">Send us an enquiry</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            &copy; {year} {company.name}. All rights reserved.
          </p>
          {(privacyUrl || termsUrl) && (
            <ul className="footer-legal">
              {privacyUrl && (
                <li>
                  <a href={privacyUrl}>Privacy Policy</a>
                </li>
              )}
              {termsUrl && (
                <li>
                  <a href={termsUrl}>Terms of Service</a>
                </li>
              )}
            </ul>
          )}
          <a
            className="powered-by"
            href="https://upgrate.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Powered by</span>
            <span className="powered-by-logo">
              <img src={upgrate} alt="Upgrate" width="240" height="97" loading="lazy" />
            </span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
