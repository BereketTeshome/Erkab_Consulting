import Navbar from "../components/Navbar";
import training from "../../public/training_bg.jpg";
import { TrainingsArray } from "../constants/constant";

const Training = () => {
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
