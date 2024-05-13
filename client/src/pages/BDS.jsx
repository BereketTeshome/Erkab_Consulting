import { Link } from "react-router-dom";
import BDSbg from "/bds_bg.png";

const Bds = () => {
  return (
    <div>
      <div className="sub-links">
        <h3>Related Pages:</h3>
        <ul>
          <li>
            <Link to="/trainings">Trainings </Link>
          </li>
          <li>
            <Link to="/solutions">Solutions </Link>
          </li>
        </ul>
      </div>
      <div className="training">
        <div className="partners-header">
          <div data-aos="fade-right" className="animation">
            <header>
              <h1>BDS</h1>
            </header>
            <b>
              <p>
                Comprehensive Business Development Services: Empowering
                Entrepreneurs
              </p>
            </b>
            <p>
              Our business development services (BDS) has a wide range of
              non-financial services provided to entrepreneurs and businesses to
              help them improve the performance of their businesses, access to
              markets, and ability to compete. This include Full end to end BDS
              provision.
            </p>
          </div>
          <img
            src={BDSbg}
            alt="BDSbg"
            data-aos="zoom-in"
            className="animation"
          />
        </div>
        <span id="ourteam"></span>
      </div>
    </div>
  );
};

export default Bds;
