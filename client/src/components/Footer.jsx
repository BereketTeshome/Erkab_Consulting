import { BsFacebook, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <ul className="social-icons">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100076019215483"
            target="_blank"
            className="social-icon"
          >
            <BsFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/bereket-teshome-1345a0246"
            target="_blank"
            className="social-icon"
          >
            <BsLinkedin />
          </a>
        </li>
      </ul>

      <ul className="footer-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/overview">About</a>
        </li>
        <li>
          <a href="/trainings">Services</a>
        </li>
        <li className="footer-price">
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <hr style={{ width: "100%", opacity: "0.2" }} />
      <p>&copy; ERKAB CONSULTING PLC. | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
