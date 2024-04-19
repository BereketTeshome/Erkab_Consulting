import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { TeamsArray } from "../constants/constant";
import TeamBG from "/team_bg.jpg";
import ArrowDown from "/Down_Arrow.gif";

const Teams = () => {
  return (
    <>
      <Navbar />
      <div className="teams">
        <div className="partners-header">
          <div>
            <h1>The Experts</h1>

            <p>
              Meet Our Dynamic Team: Passionate Professionals Dedicated to Your
              Success
            </p>
            <p>Your Trusted Partners in Business Growth and Innovation</p>
            <p>Meet the Experts Behind Your Entrepreneurial Journey</p>
            <a href="#ourteam">
              <img
                src={ArrowDown}
                alt="Arrow down gif"
                className="arrowdownGIF"
              />
            </a>
          </div>
          <img src={TeamBG} alt="PartnersBG" />
        </div>
        <span id="ourteam"></span>
        <h1 className="ourTeam-h1">OUR TEAMS</h1>

        <div className="home-container">
          {TeamsArray.map((item) => {
            return (
              <div className="profile-card" key={item.id}>
                <div className="img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="caption">
                  <h3>{item.name}</h3>
                  <p>{item.specialty}</p>
                  <div className="social-links">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Teams;
