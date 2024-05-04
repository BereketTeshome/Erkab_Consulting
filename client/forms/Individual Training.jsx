import FormfacadeEmbed from "@formfacade/embed-react";
import Navbar from "../src/components/Navbar";
import { Link } from "react-router-dom";

const IndividualTraining = () => {
  return (
    <div>
      <Navbar />
      <div className="sub-links">
        <h3>Related Pages:</h3>
        <ul>
          <li>
            <Link to="/businessOrganizations">For Business Organizations </Link>
          </li>
          <li>
            <Link to="/bds"> For Business Dev. Service </Link>
          </li>
        </ul>
      </div>

      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/104028434745036071476/form/1FAIpQLSev6eklpiedeBtZ05qRQ9guB03f1cU9aAo2L59lHgZkqeVqbw/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      />
    </div>
  );
};

export default IndividualTraining;
