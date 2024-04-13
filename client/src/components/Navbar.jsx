import { Link } from "react-router-dom";
import logo from "../../public/logo.png";
import AboutUsDropdown from "./AboutUsDropdown";
import { navItems } from "./NavItems";
import { useState } from "react";
import ServiceDropdown from "./ServiceDropdown";
import { MdKeyboardArrowDown } from "react-icons/md";
import ApplicationDropdown from "./ApplicationsDropdown";

const Navbar = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [applicationsDropdown, setApplicationsDropdown] = useState(false);

  return (
    <>
      <div className="navbar">
        <img src={logo} alt="erkab_logo.jpg" className="logo" />
        <nav className="nav-links">
          <ul>
            {navItems.map((item) => {
              if (item.title === "About Us") {
                return (
                  <li
                    key={item.id}
                    className="dropdown-list"
                    onMouseEnter={() => setAboutDropdown(true)}
                    onMouseLeave={() => setAboutDropdown(false)}
                  >
                    <Link to={item.path}>
                      {item.title}
                      <MdKeyboardArrowDown size={15} />
                    </Link>
                    {aboutDropdown && <AboutUsDropdown />}
                  </li>
                );
              }

              if (item.title === "Services") {
                return (
                  <li
                    key={item.id}
                    className="dropdown-list"
                    onMouseEnter={() => setServiceDropdown(true)}
                    onMouseLeave={() => setServiceDropdown(false)}
                  >
                    <Link to={item.path}>
                      {item.title}
                      <MdKeyboardArrowDown size={15} />
                    </Link>
                    {serviceDropdown && <ServiceDropdown />}
                  </li>
                );
              }

              if (item.title === "Applications") {
                return (
                  <li
                    key={item.id}
                    className="dropdown-list"
                    onMouseEnter={() => setApplicationsDropdown(true)}
                    onMouseLeave={() => setApplicationsDropdown(false)}
                  >
                    <Link to={item.path}>
                      {item.title}
                      <MdKeyboardArrowDown size={15} />
                    </Link>
                    {applicationsDropdown && <ApplicationDropdown />}
                  </li>
                );
              }

              return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
