import React, { useState } from "react";
import "./styles.scss";

import {
  IoHome,
  IoPersonCircleSharp,
  IoCodeSlash,
  IoBriefcase,
  IoImages,
  IoSend,
  IoClose,
  IoAppsSharp,
} from "react-icons/io5";

const navItens = [
  { name: "Home", link: "#home", icon: "IoHome" },
  { name: "About", link: "#about", icon: "IoPersonCircleSharp" },
  { name: "Skills", link: "#skills", icon: "IoCodeSlash" },
  { name: "Services", link: "#services", icon: "IoBriefcase" },
  { name: "Portfolio", link: "#portfolio", icon: "IoImages" },
  { name: "Contact", link: "#contact", icon: "IoSend" },
];

export default function Navbar() {
  const [navMenu, setNavMenu] = useState(false);

  function activeMenu() {
    setNavMenu(!navMenu);
  }

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Mike Bobsin
        </a>
        <div
          className={navMenu === true ? "nav__menu show-menu" : "nav__menu"}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            {navItens.map((x, index) => {
              return (
                <li key={index} className="nav__item">
                  <a href={x.link} className="nav__link" onClick={activeMenu}>
                    {x.icon === "IoHome" ? (
                      <IoHome className="nav__icon" />
                    ) : x.icon === "IoPersonCircleSharp" ? (
                      <IoPersonCircleSharp className="nav__icon" />
                    ) : x.icon === "IoCodeSlash" ? (
                      <IoCodeSlash className="nav__icon" />
                    ) : x.icon === "IoBriefcase" ? (
                      <IoBriefcase className="nav__icon" />
                    ) : x.icon === "IoImages" ? (
                      <IoImages className="nav__icon" />
                    ) : (
                      <IoSend className="nav__icon" />
                    )}
                    {x?.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <IoClose
            className={
              navMenu === false ? "nav__close show-menu" : "nav__close"
            }
            id="nav-close"
            onClick={activeMenu}
          />
        </div>
        <div className="nav__btns">
          <div className="nav__toggle" id="nav-toggle" onClick={activeMenu}>
            <IoAppsSharp />
          </div>
        </div>
      </nav>
    </header>
  );
}
