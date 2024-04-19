import Navbar from "../components/Navbar";
//import training from "/training_bg.jpg";
import TrainingBG from "/training_bg.png";
import ArrowDown from "/Down_Arrow.gif";
import { TrainingsArray } from "../constants/constant";

const Training = () => {
  return (
    <>
      <Navbar />
      <div className="training">
        <div className="partners-header">
          <div>
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
          <img src={TrainingBG} alt="TrainingBG" />
        </div>
        <br />
        <span id="ourteam"></span>
        <div>
          {TrainingsArray.map((item) => {
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
      </div>
    </>
  );
};

export default Training;
