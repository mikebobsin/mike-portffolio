import React from "react";
import Myself from "../../assets/myself.jpg";
import "./styles.scss";

import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoSend,
} from "react-icons/io5";

import { RiMouseLine, RiArrowDownLine } from "react-icons/ri";

const socialNetwork = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jo%C3%A3o-mike-bobsin-rieffel-90a37ab0/",
    icon: "IoLogoLinkedin",
  },
  {
    name: "GitHub",
    link: "https://github.com/mikebobsin/",
    icon: "IoLogoGithub",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mikebobsin/?hl=pt-br",
    icon: "IoLogoInstagram",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/_MikeBobsin",
    icon: "IoLogoTwitter",
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/+5551991685800",
    icon: "IoLogoWhatsapp",
  },
];

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            {socialNetwork.map((x, index) => {
              return (
                <a
                  key={index}
                  href={x.link}
                  className="home__social-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  {x.icon === "IoLogoLinkedin" ? (
                    <IoLogoLinkedin />
                  ) : x.icon === "IoLogoGithub" ? (
                    <IoLogoGithub />
                  ) : x.icon === "IoLogoInstagram" ? (
                    <IoLogoInstagram />
                  ) : x.icon === "IoLogoTwitter" ? (
                    <IoLogoTwitter />
                  ) : (
                    <IoLogoWhatsapp />
                  )}
                </a>
              );
            })}
          </div>
          <div className="home__img">
            <img src={Myself} className="home__blob" />
          </div>
          <div className="home__data">
            <h1 className="home__title">Hi, I'am Mike</h1>
            <h3 className="home__subtitle">Frontend developer</h3>
            <p className="home__description">
              High level experience in web design and development knowledge,
              producing quality work.
            </p>
            <a href="#contact" className="button button--flex">
              Contact Me
              <IoSend className="button__icon" />
            </a>
          </div>
        </div>
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <RiMouseLine className="home__scroll-mouse" />
            <span className="home__scroll-name">Scroll down</span>
            <RiArrowDownLine className="home__scroll-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
