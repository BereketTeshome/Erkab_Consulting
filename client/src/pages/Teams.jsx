import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { TeamsArray } from "../constants/constant";
import TeamBG from "/team_bg.jpg";
import ArrowDown from "/Down_Arrow.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Teams = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Navbar />
      <div className="sub-links">
        <h3>Related Pages:</h3>
        <ul>
          <li>
            <Link to="/partners"> Partners </Link>
          </li>
          <li>
            <Link to="/testimonials"> Testimonials</Link>
          </li>
        </ul>
      </div>

      <div className="teams">
        <div className="partners-header">
          <div data-aos="fade-right" className="animation">
            <header>
              <h1>The Team Experts</h1>
            </header>

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
          <img
            src={TeamBG}
            alt="PartnersBG"
            data-aos="fade-left"
            className="animation"
          />
        </div>
        <span id="ourteam"></span>

        <h1 className="ourTeam-h1 animation" data-aos="fade-left">
          OUR TEAMS
        </h1>
        <div className="home-container animation" data-aos="zoom-in">
          {TeamsArray.map((item) => {
            return (
              <div className="profile-card" key={item.id}>
                <div className="img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="caption">
                  <h3>{item.name}</h3>
                  <p>{item.specialty}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Teams;
