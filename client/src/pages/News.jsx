import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import mission from "/Eyosias.jpg";
import alem from "/Alemfire.png";
const News = () => {
  return (
    <>
      <Navbar />
      <div className="news">
        <h2>
          Latest News<span className="underline"></span>
        </h2>

        <div className="sub-container">
          <div className="sub-news">
            <img src={mission} alt="mission" />

            <div>
              <h2>News title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, nesciunt distinctio repellat, voluptatem sit
                cupiditate, nulla praesentium dolorum ea beatae exercitationem.
                Dolorem vitae culpa vel sit? Ab maiores nostrum soluta
                consequuntur doloremque. Excepturi, possimus?
              </p>
            </div>
          </div>

          <div className="sub-news">
            <img src={alem} alt="alem" />

            <div>
              <h2>News title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, nesciunt distinctio repellat, voluptatem sit
                cupiditate, nulla praesentium dolorum ea beatae exercitationem.
                Dolorem vitae culpa vel sit? Ab maiores nostrum soluta
                consequuntur doloremque. Excepturi, possimus?
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
