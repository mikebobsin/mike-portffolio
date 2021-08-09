import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpen, IoLocationSharp, IoSend } from "react-icons/io5";

import "./styles.scss";

const contact = [
  { icon: "FaPhoneAlt", title: "Call Me", subtitle: "+55 51 99168-5800" },
  { icon: "IoMailOpen", title: "Email", subtitle: "mikebobsin.dev@gmail.com" },
  {
    icon: "IoLocationSharp",
    title: "Location",
    subtitle: "Porto Alegre - Rio Grande do Sul / Brazil",
  },
];

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>
      <div className="contact__container container grid">
        <div>
          {contact.map((x, index) => {
            return (
              <div key={index} className="contact__information">
                {x.icon === "FaPhoneAlt" ? (
                  <FaPhoneAlt className="contact__icon" />
                ) : x.icon === "IoMailOpen" ? (
                  <IoMailOpen className="contact__icon" />
                ) : (
                  <IoLocationSharp className="contact__icon" />
                )}
                <div>
                  <h3 className="contact__title">{x.title}</h3>
                  <span className="contact__subtitle">{x.subtitle}</span>
                </div>
              </div>
            );
          })}
          <form action="" className="contact__form grid">
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Name
                </label>
                <input type="text" className="contact__input" />
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Email
                </label>
                <input type="email" className="contact__input" />
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Message
                </label>
                <textarea
                  name=""
                  id=""
                  cols={0}
                  rows={7}
                  className="contact__input"
                ></textarea>
              </div>
            </div>
            <div>
              <a href="#" className="button button--flex">
                Send Message <IoSend className="button__icon" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
