import React from "react";
import "./style.scss";

export default function ProjectsNav() {
  return (
    <div className="Projects__nav" id="projects">
      <div className="projects__nav__body container">
        <h2 className="projects__nav__body--title">Projects</h2>
        <span className="projects__nav__body--span"></span>
        <ul className="projects__nav__body--list">
          <li className="projects__nav__body--item blue">HTML5</li>
          <li className="projects__nav__body--item blue">CSS3</li>
          <li className="projects__nav__body--item blue">JavaScript</li>
          <li className="projects__nav__body--item blue">React.Js</li>
          <li className="projects__nav__body--item blue">Redux-toolkit</li>
          <li className="projects__nav__body--item blue">Next.Js</li>
        </ul>
      </div>
    </div>
  );
}
