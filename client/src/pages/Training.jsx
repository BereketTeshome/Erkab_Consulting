import TrainingBG from "/training_bg.png";
import ArrowDown from "/Down_Arrow.gif";
import { TrainingsArray } from "../constants/constant";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Training = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="sub-links">
        <h3>Related Pages:</h3>
        <ul>
          <li>
            <Link to="/solutions"> Solutions </Link>
          </li>
        </ul>
      </div>

      <div className="training">
        <div className="partners-header">
          <div data-aos="fade-right" className="animation">
            <header>
              <h1>Trainings</h1>
            </header>

            <b>
              <p>
                Empower Your Entrepreneurial Journey: Unlock Your Potential with
                Our Training Programs
              </p>
            </b>
            <p>
              Explore our comprehensive training page designed to equip budding
              entrepreneurs with the skills, knowledge, and strategies needed to
              thrive in today&apos;s dynamic business landscape. From
              foundational courses to advanced workshops, discover tailored
              resources curated to enhance your entrepreneurial prowess and
              propel your ventures to new heights. Embark on a transformative
              learning experience and unleash your full potential as a business
              leader.
            </p>
            <a href="#ourteam">
              <img
                src={ArrowDown}
                alt="Arrow down gif"
                className="arrowdownGIF"
              />
            </a>
          </div>
          <img
            src={TrainingBG}
            alt="TrainingBG"
            data-aos="fade-left"
            className="animation"
          />
        </div>
        <br />
        <span id="ourteam"></span>
        <div>
          {TrainingsArray.map((item) => {
            return (
              <div
                key={item.id}
                className="sub-trainings animation"
                data-aos="fade-right"
              >
                <img src={item.image} alt={item.title} />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Training;
