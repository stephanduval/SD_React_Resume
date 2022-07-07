import React from "react";
import { MdEmail } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import emailjs from "emailjs-com";

import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yie05zp",
        "template_iwb6c6y",
        form.current,
        "user_NNDZyakWivAP55hqmqiwe"
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
      <h5>Get in Touch</h5>
      <div className="section__title">Contact Me</div>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>stephan.duval@gmail.com</h5>
            <a href="mailto:stephan.duval@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <SiMessenger className="contact__option-icon" />
            <h4>Meta Messenger</h4>
            <h5>Stephan DuVal</h5>
            <a
              href="https://m.me/stephan.duval.5ref=link_from_personal_website"
              target="_blank"
            >
              Instant Chat
            </a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a href="https://wa.me/+17787883800" target="_blank">
              Call Me
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
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
