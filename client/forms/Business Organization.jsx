import FormfacadeEmbed from "@formfacade/embed-react";
import Navbar from "../src/components/Navbar";

const BusinessOrganizationForm = () => {
  return (
    <div>
      <Navbar />
      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/104028434745036071476/form/1FAIpQLSfs1UlxgUINzE3i0rRHIDIuatCUCrXjJXOPLDmSVyOtKQpgTg/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      />
    </div>
  );
};

export default BusinessOrganizationForm;
