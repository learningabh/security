import residential from "../assets/photos/residential-tower.jpg";
import { industries } from "../data/content";
import Icon from "./Icon";
import Photo from "./Photo";
import ReviewFlag from "./ReviewFlag";

function Industries() {
  return (
    <section
      id="industries"
      className="section"
      aria-labelledby="industries-title"
    >
      <div className="container industries-grid">
        <div className="industries-aside">
          <p className="eyebrow">Industries We Serve</p>
          <h2 id="industries-title" className="section-title">
            Security for the places where work and life happen.
          </h2>
          <p className="section-intro">
            Each environment brings its own priorities, from visitor flow in a
            busy lobby to vehicle movement at a loading bay. We adapt our
            approach to the setting.
          </p>
          <figure className="industries-media">
            <Photo
              src={residential}
              alt="Modern residential apartment tower with landscaped entrance"
              width="1200"
              height="800"
            />
          </figure>
        </div>

        <ul className="industry-list">
          {industries.map((industry) => (
            <li key={industry.title} className="industry">
              <span className="industry-icon">
                <Icon name={industry.icon} size={26} />
              </span>
              <div>
                <h3 className="industry-title">
                  {industry.title}
                  <ReviewFlag confirmed={industry.confirmed} />
                </h3>
                <p>{industry.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Industries;
