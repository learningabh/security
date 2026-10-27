import facade from "../assets/photos/corporate-facade.jpg";
import Photo from "./Photo";

function CallToAction() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <Photo className="cta-media" src={facade} alt="" width="1400" height="929" />
      <div className="cta-scrim" aria-hidden="true" />
      <div className="container cta-inner">
        <h2 id="cta-title" className="cta-title">
          Let&rsquo;s Build a Safer Environment Together.
        </h2>
        <p className="cta-text">
          Tell us about your security requirements, and let&rsquo;s discuss a
          solution tailored to your organization.
        </p>
        <div className="cta-actions">
          <a className="btn btn--accent btn--lg" href="#contact">
            Request a Quote
          </a>
          <a className="btn btn--outline-light btn--lg" href="#contact">
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
