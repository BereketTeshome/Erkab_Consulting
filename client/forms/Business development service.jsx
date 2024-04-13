import FormfacadeEmbed from "@formfacade/embed-react";
import Navbar from "../src/components/Navbar";

const BusinessDevelopmentService = () => {
  return (
    <div>
      <Navbar />
      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/104028434745036071476/form/1FAIpQLSeHTmCCQflb7blw__wbGJoa2-UsaSGWBXZYGKHgxc7pPWaBzA/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      />
    </div>
  );
};

export default BusinessDevelopmentService;
