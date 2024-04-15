import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { TeamsArray } from "../constants/constant";

const Teams = () => {
  return (
    <>
      <Navbar />
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
    </>
  );
};

export default Teams;
