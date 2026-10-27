import { reasons } from "../data/content";
import Icon from "./Icon";

function WhyChoose() {
  return (
    <section
      id="why-krg"
      className="section section--navy"
      aria-labelledby="why-title"
    >
      <div className="container why-grid">
        <div className="why-head">
          <p className="eyebrow eyebrow--light">Why Choose KRG</p>
          <h2 id="why-title" className="section-title">
            Confidence Begins with the Right Security Partner.
          </h2>
          <p className="section-intro">
            Choosing a security provider means trusting them with your people,
            your property and your reputation. Here is how we work to earn
            that trust.
          </p>
          <a className="btn btn--accent" href="#contact">
            Discuss Your Requirements
          </a>
        </div>

        <ul className="reason-grid">
          {reasons.map((reason) => (
            <li key={reason.title} className="reason">
              <Icon name={reason.icon} size={26} className="reason-icon" />
              <h3 className="reason-title">{reason.title}</h3>
              <p>{reason.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyChoose;
