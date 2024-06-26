import { useState } from "react";
import { Link } from "react-router-dom";
import { aboutDropdown } from "../constants/NavItems";

const AboutUsDropdown = () => {
  const [drop, setDrop] = useState(false);

  return (
    <div className="dropdown-links">
      <div className="sub-dropdown">
        <ul onClick={() => setDrop(!drop)}>
          {aboutDropdown.map((item) => (
            <li key={item.id} className={item.cName}>
              <Link to={item.path} className="dropped-link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutUsDropdown;
