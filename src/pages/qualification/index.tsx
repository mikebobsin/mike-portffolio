import React, { useState } from "react";
import "./styles.scss";
import { FaGraduationCap, FaRegCalendarAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const studyData = [
  {
    course: "Computer Tech",
    school: "Colégio Concórdia - High School",
    date: "2005 - 2007",
  },
  {
    course: "English",
    school: "Wizard - School",
    date: "2013 - 2007",
  },
  {
    course: "System for Internet",
    school: "Unoeste - University",
    date: "2017 - Now",
  },
];

const workData = [
  {
    local: "Universidade La Salle",
    title: "Trainee developer",
    date: "Jan/2016 - Dec/2016",
  },
  {
    local: "Luz Própria",
    title: "Trainee developer",
    date: "Jul/2017 - Sep/2018",
  },
  {
    local: "Universidade La Salle",
    title: "Junior Developer",
    date: "Sep/2018 - Jun/2019",
  },
  {
    local: "Pmweb",
    title: "Fontend Developer",
    date: "Jun/2019 - Feb/2021",
  },
  {
    local: "Enext",
    title: "Fontend Developer",
    date: "Apr/2021 - Aug/2021",
  },
  {
    local: "Corebiz",
    title: "Fontend Developer",
    date: "Aug/2021 - now",
  },
];

export default function Qualification() {
  const [chngQualification, setChngQualification] = useState(false);

  function changeQualification(event: any) {
    if (
      event?.target?.id === "education" ||
      event?.target?.nearestViewportElement?.id === "education__icon"
    ) {
      setChngQualification(false);
    }
    if (
      event?.target?.id === "work" ||
      event?.target?.nearestViewportElement?.id === "work__icon"
    ) {
      setChngQualification(true);
    }
  }
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal jorney</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className="qualification__button button--flex"
            id="education"
            onClick={changeQualification}
          >
            <FaGraduationCap
              className="qualification__icon"
              id="education__icon"
            />
            Education
          </div>
          <div
            className="qualification__button button--flex"
            id="work"
            onClick={(event) => changeQualification(event)}
          >
            <MdWork className="qualification__icon" id="work__icon" />
            Work
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              chngQualification === false
                ? "qualification__content qualification__active"
                : "qualification__content"
            }
            data-content
            id="education"
          >
            {studyData.map((x, index) => {
              return (
                <div key={index} className="qualification__data">
                  <div>
                    <h3 className="qualification__title">{x.course}</h3>
                    <span className="qualification__subtitle">{x.school}</span>
                    <div className="qualification__calendar">
                      <FaRegCalendarAlt /> {x.date}
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={
              chngQualification === true
                ? "qualification__content qualification__active"
                : "qualification__content"
            }
            data-content
            id="work"
          >
            {workData.map((x, index) => {
              return (
                <div key={index} className="qualification__data">
                  <div>
                    <h3 className="qualification__title">{x.local}</h3>
                    <span className="qualification__subtitle">{x.title}</span>
                    <div className="qualification__calendar">
                      <FaRegCalendarAlt /> {x.date}
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
