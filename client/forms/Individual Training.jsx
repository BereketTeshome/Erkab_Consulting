import FormfacadeEmbed from "@formfacade/embed-react";
import Navbar from "../src/components/Navbar";

const IndividualTraining = () => {
  return (
    <div>
      <Navbar />
      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/104028434745036071476/form/1FAIpQLSev6eklpiedeBtZ05qRQ9guB03f1cU9aAo2L59lHgZkqeVqbw/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      />
    </div>
  );
};

export default IndividualTraining;
