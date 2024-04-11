import Navbar from "../components/Navbar";
import webCover from "/web cover.jpg";
import vision from "/vision.png";
import mission from "/mission.png";
import values from "/values.png";
import Footer from "../components/Footer";
import projects from "/projects.png";
import partners from "/partners.png";
import clients from "/clients.png";
import meeting from "/meeting.png";
import CountUp from "react-countup";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <img src={webCover} alt="web cover image" className="web-cover-img" />

        <div className="home-aboutus">
          <h1>Erkab Consulting PLC</h1>
          <p>
            Erkab is a professional consulting firm established in 2021 G.C. the
            shareholders have a more than 13 years of profound consulting
            experience. <br />
            <br /> The meaning of Erkab is stirrup in English which again means
            small light frame or ring for receiving the foot of a rider that are
            attached by a strap to a saddle and used to aid in mounting and as a
            support while riding on a horse. Individuals and organizations need
            supports while climbing to their goals. <br />
            <br /> Specially nowadays, the pace of change is faster, the
            decisions are more complex, and the environment is more dynamic than
            any time before. To thrive in this constantly changing time,
            individuals and organizations need new ways of discovering,
            creating, and testing ideas that will help them thrive. <br />
            <br /> Erkab is there to support individuals and organizations to
            quickly discover new insights, create breakthrough ideas, and
            develop creative solutions to their most pressing challenges and
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
          <h1>Master Salesmanship-Beyond Selling Goods and Services</h1>
          <h2 className="mid-text">ABOUT THE ERKAB CONSULTANCY</h2>
          <h3 className="light-text">
            Key features of our company
          </h3> <br /> <br />
        </div>

        <div className="vision-container">
          <div>
            <img src={vision} alt="vision" />
            <h3>
              To be the most creative sprint solutions provider in East Africa{" "}
            </h3>
          </div>

          <div>
            <img src={mission} alt="mission" />
            <h3>
              To provide tailor-made sprint solutions that result in value
              addition for individuals and organizations in East Africa
            </h3>
          </div>

          <div>
            <img src={values} alt="values" />
            <h3>Agility, Continuous improvement, Curiosity, Compassion</h3>
          </div>
        </div>

        <div className="achievements">
          <div>
            <img src={partners} alt="partners" />
            <p>
              <CountUp start={5} end={14} duration={16} />+<p>Partners</p>
            </p>
          </div>

          <div>
            <img src={projects} alt="projects" />
            <p>
              <CountUp start={5} end={55} duration={16} />+<p>Projects Done</p>
            </p>
          </div>

          <div>
            <img src={clients} alt="clients" />
            <p>
              <CountUp start={5} end={89} duration={16} />+<p>Happy Clients</p>
            </p>
          </div>

          <div>
            <img src={meeting} alt="meeting" />
            <p>
              <CountUp start={5} end={150} duration={16} />+<p>Meetings</p>
            </p>
          </div>
        </div>

        <div className="subscribe">
          <div className="subscribe-container">
            <div style={{ marginTop: "60px" }}>
              <h1 className="popularh2">Get started with Erkab-Consulting</h1>
              <p>Subscribe and find super affordable trainings from us</p>
              <a href="mailto:erkabconsulting@gmail.com">
                <button>Get Started</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
