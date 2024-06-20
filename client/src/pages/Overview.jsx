import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Overview = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div className="sub-links">
        <h3>Related Pages:</h3>
        <ul>
          <li>
            <Link to="/teams">Team </Link>
          </li>
          <li>
            <Link to="/testimonials"> Testimonials</Link>
          </li>
        </ul>
      </div>

      <div className="overview">
        <header>
          <h2 data-aos="fade-right" className="animation">
            Overview<span className="underline"></span>
          </h2>
        </header>
        <h1>WHO WE ARE</h1> <br /> <br />
        <p className="overview_p animation" data-aos="zoom-in">
          Erkab is a professional consulting firm established in 2021 G.C. the
          share holders have a more than 13 years of profound consulting
          experience. <br />
          <br /> The meaning of Erkab is stirrup in English which again means
          small light frame or ring for receiving the foot of a rider that are
          attached by a strap to a saddle and used to aid in mounting and as a
          support while riding on a horse. Individuals and organizations need
          supports while climbing to their goals. <br />
          <br />
          Specially nowadays, the pace of change is faster, the decisions are
          more complex, and the environment is more dynamic than any time
          before. <br />
          <br /> To thrive in this constantly changing time, individuals and
          organizations need new ways of discovering, creating, and testing
          ideas that will help them thrive. <br />
          <br /> Erkab is there to support individuals and organizations to
          quickly discover new insights, create breakthrough ideas, and develop
          creative solutions to their most pressing challenges and
          opportunities. <br />
          <br /> So far, Erkab delivered trainings, business development
          services and other consulting services for 10+ organizations which
          include banks, NGOs, Medias and other businesses.
          <br /> <br />
          <br />
          <h1 data-aos="fade-right" className="animation">
            Areas of Specialization
          </h1>
          <br />
          <p data-aos="zoom-in" className="animation">
            <b>Business development service: </b> Erkab has a tailored made
            business development service which is an array of interconnected end
            to end BDS provisions. <br /> This service involves need assessment
            and gap analysis for business companies and enterprises, tailoring
            business development service based on gaps and needs, providing
            tailored services and mentorship, coaching, advisory and follow up
            services.
            <br />
            <br /> This business development service lasts for 2-6 months. So
            far MSMEs supported by NGOs and companies have got our services.
          </p>
        </p>
        <br />
        <p data-aos="zoom-in" className="animation">
          <b>Master Salesmanship training: </b> This training is the only
          training package available from Erkab in Ethiopia. It is competence
          and behavioral based hands on practical training with 13 master
          salesmanship competences and 156 behaviors. This training is available
          for sales representatives, sales persons, banking customer officers,
          real estate agents etc.{" "}
        </p>
        <br />
        <p data-aos="fade-left" className="animation">
          <b>Corporate Entrepreneurship training: </b> This is a capacity
          building training for corporations.
        </p>
        <br />
        <p data-aos="fade-right" className="animation">
          <b>Leadership training: </b> This training is a practical leadership
          training that applies transformational leadership by using the DAC
          model
        </p>
        <br />
        <p data-aos="fade-left" className="animation">
          <b>Emotional intelligent training: </b> This training has 2 types
          based targets who are corporate managers and married &relationship
          couples.
        </p>
        <br />
        <p data-aos="fade-right" className="animation">
          <strong>The 3rd Eye: </strong>
          This is Erkab’s media product which is being broadcasted via Youtube
          and also it will start via television in the near future in
          partnership with Erkab consulting, Abay TV and EDI. <br />
          <a href="https://t.me/OpenTheThirdEye" target="_blank">
            <i>Click to see our Telegram Channel</i>
          </a>
          <br />
          <a
            href="https://www.tiktok.com/@ze3rdeye?_t=8m4EZHnMiUI&_r=1"
            target="_blank"
          >
            <i>Click to see our Tiktok Page</i>
          </a>
          <br />
          <a href="https://www.youtube.com/@youtubecreatores96" target="_blank">
            <i>Click to see our Youtube Channel</i>
          </a>
          <br />
          <br />
          <b>The 3rd Eye provide Events and advertisement services like:</b>
          <div className="third-eye-services">
            <p>
              <br />
              -Organizing bazars for MSMEs
            </p>
            <p>
              <br />
              -On the 3rd Eye TV show advertisement
            </p>
            <p>
              <br />
              -Door to door promotion of products
            </p>{" "}
          </div>
          <br />
        </p>
        <br />
        <h1 data-aos="fade-right" className="animation">
          Our Achievements so far
        </h1>
        <br />
        <p data-aos="zoom-in" className="animation">
          - Provided Business development service for more than 500 business
          enterprises
          <br />
          <br />
          - Provided various trainings for 5000 individuals
          <br />
          <br />
          - Enabled 50 MSMEs to be created
          <br />
          <br />
          - Facilitated and enabled 103 MSMEs to extend their business.
          <br />
          <br />
        </p>
      </div>
    </>
  );
};

export default Overview;
