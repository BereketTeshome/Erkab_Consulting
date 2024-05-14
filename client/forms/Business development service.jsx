import FormfacadeEmbed from "@formfacade/embed-react";
import { Link } from "react-router-dom";

const BusinessDevelopmentService = () => {
  return (
    <div>
      <div className="sub-links">
        <h3>Related Pages:</h3>
        <ul>
          <li>
            <Link to="/trainingIndividual">For Individuals </Link>
          </li>
          <li>
            <Link to="/businessOrganizations">For Business Organizations </Link>
          </li>
        </ul>
      </div>

      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/108098941423634561116/form/1FAIpQLSf8VZtlBCoqftcd2ig8HlPlN2pwzcRWeahQc1jegTrOKFNI9Q/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      />
    </div>
  );
};

export default BusinessDevelopmentService;
