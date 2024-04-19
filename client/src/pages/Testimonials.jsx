import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Navbar />
      <div className="overview">
        <div className="overview-header">
          <header className="test-header animation" data-aos="fade-right">
            <h1>Testimonials</h1>
            <span className="underline"></span>
          </header>
          <br />
          <h2>What Our Customers Say About Us</h2> <br />
        </div>
        <br />

        <div className="main-test-container">
          <div className="test-container">
            <p data-aos="fade-right" className="animation">
              <i>
                “My business has got the right medicine and got cured”
                <br /> <br />
                - Yetmwork Mitku <br />
                - Owner, Blisuma leather manufacturing <br />
              </i>
            </p>

            <p data-aos="fade-left" className="animation">
              <i>
                “I got a practical master salesmanship training. Above all, I
                got my self”
                <br /> <br />
                - Aster from EBC <br />
              </i>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Testimonials;
