import Navbar from "../components/Navbar";
import SolutionsBG from "/solutions_bg.png";
import ArrowDown from "/Down_Arrow.gif";
import design from "/design.jpg";
import life from "/life_skill.jpg";
import corporate from "/corporate.png";
import business from "/business.png";
import e_ship from "/e-ship.jpg";
import { SolutionsArray } from "../constants/constant";
import Footer from "../components/Footer";

const Solution = () => {
  return (
    <>
      <Navbar />
      <div className="training">
        <div className="partners-header">
          <div>
            <header>
              <h1>Solutions</h1>
            </header>

            <b>
              <p>Discover Tailored Solutions for Your Business Success</p>
            </b>
            <p>
              Welcome to our Solutions page, where you&apos;ll find a range of
              customizable offerings designed to address your unique business
              challenges and drive success. Whether you&apos;re looking to
              streamline operations, boost productivity, or enhance customer
              satisfaction, our diverse suite of solutions has you covered. From
              strategic consulting to cutting-edge technology solutions,
              we&apos;re here to help you achieve your goals and stay ahead in
              today&apos;s competitive marketplace. Explore our offerings and
              take the first step towards unlocking your business&apos;s full
              potential.
            </p>
            <a href="#ourteam">
              <img
                src={ArrowDown}
                alt="Arrow down gif"
                className="arrowdownGIF"
              />
            </a>
          </div>
          <img src={SolutionsBG} alt="SolutionsBG" />
        </div>
        <span id="ourteam"></span>
        <br />

        <div>
          {SolutionsArray.map((item) => {
            return (
              <div key={item.id} className="sub-trainings">
                <img src={item.image} alt={item.title} />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="training-section">
          <h1>Tailor-made training and other service solutions</h1>

          <h2>Most probable targets </h2>

          <div className="text-scroll">
            <div className="target-scroll">
              <div className="sub-target-scroll">
                <p>Start ups Corporates</p>
                <p>Youth</p>
                <p>Corporate executives</p>
                <p>Entrepreneurs</p>
                <p>Business Owners</p>
                <p>NGOs</p>
                <p>Researchers</p>
                <p>Policy makers</p>
              </div>
            </div>

            <div className="target-scroll">
              <div className="sub-target-scroll">
                <p>Start ups Corporates</p>
                <p>Youth</p>
                <p>Corporate executives</p>
                <p>Entrepreneurs</p>
                <p>Business Owners</p>
                <p>NGOs</p>
                <p>Researchers</p>
                <p>Policy makers</p>
              </div>
            </div>
          </div>

          <div className="solution-scroll">
            <div className="images-scroll">
              <img src={design} alt="design" />
              <img src={life} alt="life" />
              <img src={corporate} alt="corporate" />
              <img src={business} alt="business" />
              <img src={e_ship} alt="e_ship" />
            </div>

            <div className="images-scroll">
              <img src={design} alt="design" />
              <img src={life} alt="life" />
              <img src={corporate} alt="corporate" />
              <img src={business} alt="business" />
              <img src={e_ship} alt="e_ship" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Solution;
