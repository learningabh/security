import { services } from "../data/content";
import Icon from "./Icon";
import ReviewFlag from "./ReviewFlag";

// Security services section.
function Security({ onEnquire }) {
  return (
    <section
      id="services"
      className="section section--stone"
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Security Services</p>
          <h2 id="services-title" className="section-title">
            Protection planned around how your site operates.
          </h2>
          <p className="section-intro">
            Every property has its own rhythm of people, deliveries and
            activity. Our services are arranged to fit that rhythm, with clear
            responsibilities for every post.
          </p>
        </div>

        <ul className="service-grid">
          {services.map((service) => (
            <li key={service.title} className="service">
              <span className="service-icon">
                <Icon name={service.icon} size={28} />
              </span>
              <h3 className="service-title">
                {service.title}
                <ReviewFlag confirmed={service.confirmed} />
              </h3>
              <p className="service-text">{service.text}</p>
              <a
                className="text-link"
                href="#contact"
                aria-label={`Enquire about ${service.title}`}
                onClick={() => onEnquire(service.title)}
              >
                Enquire about this service
                <Icon name="arrow" size={16} />
              </a>
            </li>
          ))}
          <li className="service service--cta">
            <h3 className="service-title">Need something specific?</h3>
            <p className="service-text">
              Tell us about your premises and the coverage you have in mind,
              and we will discuss an arrangement that fits.
            </p>
            <a className="btn btn--accent" href="#contact">
              Request a Quote
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Security;
