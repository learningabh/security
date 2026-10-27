import { steps } from "../data/content";

function Approach() {
  return (
    <section
      id="approach"
      className="section section--stone"
      aria-labelledby="approach-title"
    >
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Our Approach</p>
          <h2 id="approach-title" className="section-title">
            A clear process from first conversation to ongoing service.
          </h2>
        </div>

        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step.title} className="step">
              <span className="step-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="step-title">{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Approach;
