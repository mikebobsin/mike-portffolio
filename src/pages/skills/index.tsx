import React, { useState } from "react";
import { GrCode, GrFormDown, GrImage, GrCli } from "react-icons/gr";

import "./styles.scss";

const skills = [
  {
    skillType: "Frontend developer",
    skillIcon: "GrCode",
    skillSubtitle: "More than 6 years",
    skill: [
      { name: "HTML", percent: "95%" },
      { name: "CSS", percent: "90%" },
      { name: "JavaScript", percent: "95%" },
      { name: "TypeScript", percent: "90%" },
      { name: "React - Redux", percent: "80%" },
      { name: "Vue - VueX", percent: "90%" },
      { name: "Vtex IO", percent: "75%" },
    ],
  },
  {
    skillType: "Designer",
    skillIcon: "GrImage",
    skillSubtitle: "More than 2 years",
    skill: [
      { name: "Figma", percent: "80%" },
      { name: "Photoshop", percent: "65%" },
      { name: "Adobe XD", percent: "60%" },
    ],
  },
  {
    skillType: "Common Skills",
    skillIcon: "GrCli",
    skillSubtitle: "More than 4 years",
    skill: [
      { name: "Scrum", percent: "80%" },
      { name: "Kanban", percent: "85%" },
      { name: "Jira", percent: "75%" },
      { name: "Git", percent: "95%" },
    ],
  },
];

export default function Skills() {
  const [skillShow, setSkillShow] = useState({ change: false, idx: -1 });

  function openSkill(val: any) {
    setSkillShow({ change: !skillShow, idx: val });
  }
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <div>
          {skills.map((x, index) => {
            return (
              <div
                key={index}
                className={
                  skillShow.change === false && skillShow.idx === index
                    ? `skills__content ${index} skills__open`
                    : `skills__content ${index} skills__close`
                }
                onClick={() => openSkill(index)}
              >
                <div className="skills__header">
                  {x?.skillIcon === "GrCode" ? (
                    <GrCode className="skills__icon" />
                  ) : x?.skillIcon === "GrImage" ? (
                    <GrImage className="skills__icon" />
                  ) : (
                    <GrCli className="skills__icon" />
                  )}
                  <div>
                    <h1 className="skills_title">{x?.skillType}</h1>
                    <span className="skills__subtitle">{x?.skillSubtitle}</span>
                    <GrFormDown className="skills__arrow" />
                  </div>
                </div>
                {x.skill.map((y, i) => {
                  return (
                    <div key={i} className="skills__list grid">
                      <div className="skills__data">
                        <div className="skills__titles">
                          <h3 className="skills__name">{y?.name}</h3>
                          <span className="skills__number">{y?.percent}</span>
                        </div>
                        <div className="skills__bar">
                          <span
                            className={
                              "skills__percentage skills__" +
                              y?.name.toLowerCase()
                            }
                          ></span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
