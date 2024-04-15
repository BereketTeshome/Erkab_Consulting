import Navbar from "../components/Navbar";
import training from "/solutions.jpg";
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
        <img
          src={training}
          alt="training background image"
          className="training-bg"
        />
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
