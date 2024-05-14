import vision from "/vision.png";
import mission from "/mission.png";
import values from "/values.png";
import projects from "/projects.png";
import partners from "/partners.png";
import clients from "/clients.png";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import SAA from "/SAA.png";
import EBC from "/EBC.jpg";
import PIN from "/PIN.png";
import CJ from "/CJ.jpg";
import Ahaz from "/ahaz_pharma.jpg";
import Goh from "/goh.jpg";
import Map from "../components/Map";
import { GiCheckMark } from "react-icons/gi";
import ReactPlayer from "react-player";
import axios from "axios";

export default function Home() {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const API_KEY = "AIzaSyC_gZE1BGiPNbL8HWpH4zd7VrEH-ZcAJhQ";
        const channelId = "UCO_OTsGDfHHqPAoraYRAULg";
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=1&order=date&type=video&key=${API_KEY}`
        );

        if (response.data.items.length > 0) {
          const latestVideo = response.data.items[0];
          setVideoId(latestVideo.id.videoId);
        }
      } catch (error) {
        console.error("Error fetching YouTube data:", error);
      }
    };

    fetchVideo();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="home">
      <div className="animation" data-aos="zoom-in">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls={true}
          width="100%"
          height="500px"
        />
      </div>

      <div className="home-aboutus animation" data-aos="zoom-in">
        <h1>Erkab Consulting PLC.</h1>
        <p className="home-aboutus-p">
          Erkab is a professional consulting firm established in 2021 G.C. the
          shareholders have a more than 13 years of profound consulting
          experience. <br />
          <br /> The meaning of Erkab is stirrup in English which again means
          small light frame or ring for receiving the foot of a rider that are
          attached by a strap to a saddle and used to aid in mounting and as a
          support while riding on a horse. Individuals and organizations need
          supports while climbing to their goals. <br />
          <br /> Specially nowadays, the pace of change is faster, the decisions
          are more complex, and the environment is more dynamic than any time
          before. To thrive in this constantly changing time, individuals and
          organizations need new ways of discovering, creating, and testing
          ideas that will help them thrive. <br />
          <br /> Erkab is there to support individuals and organizations to
          quickly discover new insights, create breakthrough ideas, and develop
          creative solutions to their most pressing challenges and
          opportunities. <br />
          <br /> So far, Erkab delivered trainings, business development
          services and other consulting services for 10+ organizations which
          include banks, NGOs, Medias and other businesses.
        </p>
        <br />
        <a href="/overview">Learn More</a>
      </div>
      <br />
      <br />

      <div className="home-header">
        <h1 className="light-text">Key features of our company</h1> <br />{" "}
        <br />
      </div>

      <div className="vision-container animation" data-aos="zoom-in">
        <div id="vision-1">
          <img src={vision} alt="vision" />
          <h3>
            To be the most creative sprint solutions provider in East Africa{" "}
          </h3>
        </div>

        <div id="vision-2">
          <img src={mission} alt="mission" />
          <h3>
            To provide tailor-made sprint solutions that result in value
            addition for individuals and organizations in East Africa
          </h3>
        </div>

        <div id="vision-3">
          <img src={values} alt="values" />
          <h3>
            <GiCheckMark /> Agility <br />
            <GiCheckMark /> Curiosity <br /> <GiCheckMark /> Compassion
            <p style={{ fontSize: "0.97rem" }}>
              <GiCheckMark /> Continuous Improvement
            </p>
          </h3>
        </div>
      </div>

      <div className="partners">
        <span id="ourteam"></span>
        <div>
          <h2 data-aos="fade-right" className="animation">
            Our Partners <span className="underline"></span>
          </h2>
        </div>
        <div className="solution-scroll">
          <div className="images-scroll">
            <img src={SAA} alt="SAA" />
            <img src={EBC} alt="life" />
            <img src={PIN} alt="PIN" />
            <img src={CJ} alt="CJ" />
            <img src={Ahaz} alt="Ahaz" />
            <img src={Goh} alt="Goh" />
          </div>

          <div className="images-scroll">
            <img src={SAA} alt="SAA" />
            <img src={EBC} alt="life" />
            <img src={PIN} alt="PIN" />
            <img src={CJ} alt="CJ" />
            <img src={Ahaz} alt="Ahaz" />
            <img src={Goh} alt="Goh" />
          </div>
        </div>
      </div>

      <div className="achievements animation" data-aos="zoom-out">
        <div>
          <img src={partners} alt="partners" />
          <p>
            <CountUp start={5} end={10} duration={16} />+<p>Partners</p>
          </p>
        </div>

        <div>
          <img src={projects} alt="projects" id="projects-img" />
          <p>
            <CountUp start={5} end={55} duration={10} />+<p>Projects Done</p>
          </p>
        </div>

        <div>
          <img src={clients} alt="clients" />
          <p>
            <CountUp start={5} end={5000} duration={10} />+<p>Happy Clients</p>
          </p>
        </div>
      </div>

      <div className="subscribe animation" data-aos="zoom-out">
        <div className="subscribe-container">
          <div style={{ marginTop: "60px" }}>
            <h1 className="popularh2">Get started with Erkab-Consulting</h1>
            <p>Subscribe and find super affordable trainings from us</p>
            <a href="mailto:Info@erkabconsulting.com" target="_blank">
              <button>Get Started</button>
            </a>
          </div>
        </div>
      </div>

      <div className="location animation" data-aos="zoom-in">
        <div className="loc-left">
          <h1>Visit Us</h1>
          <span className="underline"></span>

          <p className="loc-left-p">Addis Ababa 22,Golagol Office No: 1113</p>

          <h3>Opening Hours:</h3>
          <div className="opening-hours">
            <p>MON - SAT</p>
            <h4>02:00 - 12:00 LT</h4>
          </div>

          <div className="opening-hours">
            <p>SUNDAY</p>
            <h4>Closed</h4>
          </div>
        </div>

        <div className="loc-right">
          <Map />
        </div>
      </div>
    </div>
  );
}
