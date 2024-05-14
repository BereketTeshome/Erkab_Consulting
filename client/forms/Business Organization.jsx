import FormfacadeEmbed from "@formfacade/embed-react";

import { Link } from "react-router-dom";

const BusinessOrganizationForm = () => {
  return (
    <div>
      <div className="sub-links">
        <h3>Related Pages:</h3>
        <ul>
          <li>
            <Link to="/trainingIndividual">For Individuals </Link>
          </li>
          <li>
            <Link to="/bds"> For Business Dev. Service </Link>
          </li>
        </ul>
      </div>

      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/108098941423634561116/form/1FAIpQLSf-xQJf-T6o3j4ktfe45Gm0OuC3D9P3zd2Dtga3W7x1BpxAXQ/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      />
    </div>
  );
};

export default BusinessOrganizationForm;
