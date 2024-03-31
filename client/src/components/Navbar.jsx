import { Link } from "react-router-dom";
import logo from "/erkab_logo.jpg";
import AboutUsDropdown from "./AboutUsDropdown";
import { navItems } from "./NavItems";
import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className="navbar">
        <img src={logo} alt="erkab_logo.jpg" className="logo" />
        <nav className="nav-links">
          <ul>
            {navItems.map((item) => {
              if (item.title === "Services") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown && <AboutUsDropdown />}
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
