import { useEffect, useRef } from "react";
import { SiGmail } from "react-icons/si";
import { MdCall } from "react-icons/md";
import emailjs from "emailjs-com";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kg4i1m6",
        "template_8dmgofd",
        form.current,
        "M4Zpi-71dA7NzuDyn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <header data-aos="fade-right" className="animation">
        <h5>Get In Touch</h5>
        <h2>
          Contact <span className="me">Us</span>
        </h2>
      </header>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option animation" data-aos="zoom-in">
            <SiGmail className="contact-icon" />
            <h4>GMAIL</h4>
            <h5>Info@erkabconsulting.com</h5>
            <a href="mailto:Info@erkabconsulting.com" target="_blank">
              send a message
            </a>
          </article>

          <article className="contact__option animation" data-aos="zoom-in">
            <MdCall className="contact-icon" />
            <h4>Call</h4>
            <h5>+251940917172</h5>
            <a href="tel:0940917172">Ring the bell</a>
          </article>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-left"
          className="animation"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact-input"
            required
          />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Message"
            className="contact-input"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
