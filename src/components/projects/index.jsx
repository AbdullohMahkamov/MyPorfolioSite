import React from "react";
import "./style.scss";

export default function Projects({ adress, title, image, techs }) {
  return (
    <div className="projects__card">
      <a rel="noreferrer" target="_blank" href={adress}>
        <img className="projects__card--img" src={image} alt={title} />
      </a>

      <div className="projects__card--box">
        <h2 className="projects__card--box--title"> {title}</h2>
        <span className="projects__card--box--span">{techs}</span>
        <a rel="noreferrer" target="_blank" href={adress}>
          <button data-text="Learn More" className="projects__card--box--btn">
            <span>Go to site</span>
          </button>
        </a>
      </div>
    </div>
  );
}
