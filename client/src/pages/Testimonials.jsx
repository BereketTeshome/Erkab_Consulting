import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Testimonials = () => {
  return (
    <>
      <Navbar />
      <div className="overview">
        <div className="overview-header">
          <div className="test-header">
            <h1>Testimonials </h1>
            <span className="underline"></span>
          </div>
          <br />
          <h2>What Our Customers Say About Us</h2> <br />
        </div>
        <br />

        <div className="main-test-container">
          <div className="test-container">
            <p>
              <i>
                “My business has got the right medicine and got cured”
                <br /> <br />
                - Yetmwork Mitku <br />
                - Owner, Blisuma leather manufacturing <br />
              </i>
            </p>

            <p>
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
