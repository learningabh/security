import facade from "../assets/photos/corporate-facade.jpg";
import { principles } from "../data/content";
import Photo from "./Photo";

function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about-grid">
        <figure className="about-media">
          <Photo
            src={facade}
            alt="Glass facade of a corporate office building"
            width="1400"
            height="929"
          />
        </figure>

        <div className="about-copy">
          <p className="eyebrow">About Kinetic Resource Group</p>
          <h2 id="about-title" className="section-title">
            Built on Trust. Driven by Responsibility.
          </h2>
          <p className="lead">
            Kinetic Resource Group provides security services for organizations
            that need dependable people and clear thinking at their premises.
          </p>
          <p>
            Good security is rarely loud. It is the officer who notices what
            has changed at a gate, the handover that leaves nothing unsaid, and
            the plan that reflects how a site actually operates. We begin every
            engagement by understanding the property, the people who use it and
            the concerns that matter most to our client, then build our
            deployment around that understanding.
          </p>
          <p>
            We treat each client relationship as a shared responsibility: being
            clear about what we will do, keeping you informed, and taking
            ownership when something needs attention.
          </p>
        </div>
      </div>

      <div className="container">
        <ol className="principles">
          {principles.map((principle, index) => (
            <li key={principle.title} className="principle">
              <span className="principle-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="principle-title">{principle.title}</h3>
              <p>{principle.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default About;
