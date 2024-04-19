import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SAA from "/SAA.png";
import EBC from "/EBC.jpg";
import PIN from "/PIN.png";
import CJ from "/CJ.jpg";
import Ahaz from "/ahaz_pharma.jpg";
import Goh from "/goh.jpg";
import PartnersBG from "/partners_bg1.jpg";
import ArrowDown from "/Down_Arrow.gif";

const Partners = () => {
  return (
    <>
      <Navbar />
      <div className="partners">
        <div className="partners-header">
          <div>
            <header>
              <h1>Business Partnership</h1>
            </header>

            <p>
              Join Forces with Us: Together, Let us Build Your Business Dream
              into Reality
            </p>
            <p>
              Partner with Our Expertise, Experience, and Passion for Success.
            </p>
            <p>Collaborate with Us: Your Business Journey Starts Here</p>
            <a href="#ourteam">
              <img
                src={ArrowDown}
                alt="Arrow down gif"
                className="arrowdownGIF"
              />
            </a>
          </div>
          <img src={PartnersBG} alt="PartnersBG" />
        </div>

        <span id="ourteam"></span>
        <div>
          <h2>
            Our Partners <span className="underline"></span>
          </h2>
        </div>
        <div className="solution-scroll">
          <div className="images-scroll">
            <img src={SAA} alt="SAA" />
            <img src={EBC} alt="life" />
            <img src={PIN} alt="PIN" />
            <img src={CJ} alt="CJ" />
            <img src={Ahaz} alt="Ahaz" />
            <img src={Goh} alt="Goh" />
          </div>

          <div className="images-scroll">
            <img src={SAA} alt="SAA" />
            <img src={EBC} alt="life" />
            <img src={PIN} alt="PIN" />
            <img src={CJ} alt="CJ" />
            <img src={Ahaz} alt="Ahaz" />
            <img src={Goh} alt="Goh" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Partners;
