import React from "react";

import { HiDocumentDownload } from "react-icons/hi";
import MyselfAbout from "../../assets/myself-about.jpg";
// import CVEN from "../../assets/MikeEN.pdf";

import "./styles.scss";

const aboutInfo = [
  { title: "08+", name: "Years <br> experience" },
  { title: "20+", name: "Completed <br> projects" },
  { title: "05+", name: "Companies <br> worked" },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src={MyselfAbout} alt="Mike Bobsin" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            Web developer, with extensive knowledge and years of experience,
            workign in web tecnologias and UI/UX design, delivering quality
            work.
          </p>
          <div className="about__info">
            {aboutInfo.map((x, index) => {
              return (
                <div key={index}>
                  <span className="about__info-title">{x.title}</span>
                  <span
                    className="about__info-names"
                    dangerouslySetInnerHTML={{ __html: x.name }}
                  ></span>
                </div>
              );
            })}
          </div>
          <div className="about__buttons">
            <a
              download=""
              href="../../assets/MikeEN.pdf"
              className="button button--flex"
            >
              Download CV <HiDocumentDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
