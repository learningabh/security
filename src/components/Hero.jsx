import lobby from "../assets/photos/commercial-lobby.jpg";
import { company } from "../data/site";

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <img
        className="hero-media"
        src={lobby}
        alt="Glass-walled entrance lobby of a modern commercial building"
        width="1920"
        height="1200"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-scrim" aria-hidden="true" />

      <div className="container hero-inner">
        <p className="eyebrow eyebrow--light">Professional Security Services</p>
        <h1 id="hero-title" className="hero-title">
          Security That Moves Your Business Forward.
        </h1>
        <p className="hero-lead">
          Reliable security solutions designed to help protect people,
          safeguard property, and support the smooth operation of businesses
          and facilities.
        </p>
        <div className="hero-actions">
          <a className="btn btn--accent btn--lg" href="#contact">
            Request a Security Consultation
          </a>
          <a className="btn btn--outline-light btn--lg" href="#services">
            Explore Our Services
          </a>
        </div>
      </div>

      <div className="hero-band">
        <div className="container hero-band-inner">
          <p className="hero-tagline">{company.tagline}</p>
          <ul className="hero-values" aria-label="Our values">
            {company.values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
