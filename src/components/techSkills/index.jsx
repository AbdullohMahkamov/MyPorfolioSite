import React from "react";

import "./style.css";

export default function TechSkills({ image, title }) {
  return (
    <section className="tech__skills" id="skills">
      <div className="slider__center">
        <article>
          <img className="skills__img" src={image} alt={title} />
        </article>
      </div>
    </section>
  );
}
