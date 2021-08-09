import React from "react";

import "./styles.scss";

import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";

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

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Mike Bobsin</h1>
            <span className="footer__subtitle">Frontend Developer</span>
          </div>
          <ul className="footer__links">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>
            <li>
              <a href="#qualification" className="footer__link">
                Qualification
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            {socialNetwork.map((x, index) => {
              return (
                <a
                  key={index}
                  href={x.link}
                  className="footer__social"
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
        </div>
        <p className="footer__copy">&#169; Mike Bobsin. All rights reserved</p>
      </div>
    </footer>
  );
}
