import { useState } from "react";
import About from "./About";
import Approach from "./Approach";
import CallToAction from "./CallToAction";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Industries from "./Industries";
import Security from "./Security";
import WhyChoose from "./WhyChoose";

function Home() {
  // Set when a visitor clicks "Enquire about …" on a service, so the
  // contact form can pre-select it. A new object each click re-applies it.
  const [serviceRequest, setServiceRequest] = useState(null);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Security onEnquire={(service) => setServiceRequest({ service })} />
        <WhyChoose />
        <Industries />
        <Approach />
        <CallToAction />
        <Contact serviceRequest={serviceRequest} />
      </main>
      <Footer />
    </>
  );
}

export default Home;
