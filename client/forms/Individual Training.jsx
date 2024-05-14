import FormfacadeEmbed from "@formfacade/embed-react";
import { Link } from "react-router-dom";

const IndividualTraining = () => {
  return (
    <div>
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
        formFacadeURL="https://formfacade.com/include/108098941423634561116/form/1FAIpQLScsbFIqp8w9Ztbxx2mwar2-LJwMUTZMO21246WyWqnTlTcMNw/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      />
    </div>
  );
};

export default IndividualTraining;
