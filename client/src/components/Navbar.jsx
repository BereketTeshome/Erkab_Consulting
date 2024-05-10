import { Link } from "react-router-dom";
import logo from "/logo1.jpg";
import AboutUsDropdown from "./AboutUsDropdown";
import { navItems } from "../constants/NavItems";
import { useState } from "react";
import ServiceDropdown from "./ServiceDropdown";
import { MdKeyboardArrowDown } from "react-icons/md";
import ApplicationDropdown from "./ApplicationsDropdown";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [applicationsDropdown, setApplicationsDropdown] = useState(false);

  const handleAboutCLick = () => {
    setAboutDropdown(!aboutDropdown);
    if (serviceDropdown || applicationsDropdown) {
      setServiceDropdown(false);
      setApplicationsDropdown(false);
    }
  };

  const handleServiceCLick = () => {
    setServiceDropdown(!serviceDropdown);
    if (aboutDropdown || applicationsDropdown) {
      setAboutDropdown(false);
      setApplicationsDropdown(false);
    }
  };

  const handleApplicationsCLick = () => {
    setApplicationsDropdown(!applicationsDropdown);
    if (aboutDropdown || serviceDropdown) {
      setAboutDropdown(false);
      setServiceDropdown(false);
    }
  };

  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="navbar">
        <a href="/">
          <img src={logo} alt="erkab_logo.jpg" className="logo" />
        </a>
        <nav>
          <div className="nav-links">
            <ul style={toggle ? { left: "-100%" } : { left: "0" }}>
              {navItems.map((item) => {
                if (item.title === "About") {
                  return (
                    <li
                      key={item.id}
                      className="dropdown-list"
                      onMouseLeave={() => handleAboutCLick()}
                    >
                      <Link to={item.path}>{item.title}</Link>
                      <MdKeyboardArrowDown
                        size={25}
                        className="arrowDown"
                        onMouseEnter={() => handleAboutCLick()}
                      />

                      {aboutDropdown && <AboutUsDropdown />}
                    </li>
                  );
                }

                if (item.title === "Services") {
                  return (
                    <li
                      key={item.id}
                      className="dropdown-list"
                      onMouseLeave={() => handleServiceCLick()}
                    >
                      <Link to={item.path}>{item.title}</Link>
                      <MdKeyboardArrowDown
                        size={25}
                        className="arrowDown"
                        onMouseEnter={() => handleServiceCLick()}
                      />
                      {serviceDropdown && <ServiceDropdown />}
                    </li>
                  );
                }

                if (item.title === "Applications") {
                  return (
                    <li
                      key={item.id}
                      className="dropdown-list"
                      onMouseLeave={() => handleApplicationsCLick()}
                    >
                      <Link to={item.path}>{item.title}</Link>
                      <MdKeyboardArrowDown
                        size={25}
                        className="arrowDown"
                        onMouseEnter={() => handleApplicationsCLick()}
                      />
                      {applicationsDropdown && <ApplicationDropdown />}
                    </li>
                  );
                }

                return (
                  <li key={item.id} className="dropdown-list">
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="check_btn_container">
            <input type="checkbox" id="check" name="check" />
            <label
              htmlFor="check"
              className="navbar_checkBtn"
              onMouseEnter={handleToggle}
            >
              {toggle ? <MdMenu /> : <MdClose />}
            </label>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
