import { useState } from "react";
import { Link } from "react-router-dom";
import { ApplicationsDropdown } from "../constants/NavItems";

const ApplicationDropdown = () => {
  const [drop, setDrop] = useState(false);

  return (
    <div className="dropdown-links">
      <div className="sub-dropdown">
        <ul onClick={() => setDrop(!drop)}>
          {ApplicationsDropdown.map((item) => (
            <li key={item.id} className={item.cName}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ApplicationDropdown;
