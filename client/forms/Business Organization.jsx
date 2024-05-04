import FormfacadeEmbed from "@formfacade/embed-react";
import Navbar from "../src/components/Navbar";
import { Link } from "react-router-dom";

const BusinessOrganizationForm = () => {
  return (
    <div>
      <Navbar />
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
        formFacadeURL="https://formfacade.com/include/104028434745036071476/form/1FAIpQLSfs1UlxgUINzE3i0rRHIDIuatCUCrXjJXOPLDmSVyOtKQpgTg/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      />
    </div>
  );
};

export default BusinessOrganizationForm;
