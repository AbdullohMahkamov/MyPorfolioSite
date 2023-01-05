import React from "react";
import "./style.css";

export default function ProjectsCards({ adress, title, image, techs }) {
  return (
    <div className="wrapper">
      <div className="cols">
        <div className="col">
          <div className="box">
            <div
              className="front"
              style={{ backgroundImage: `url(${image}) ` }}
            >
              <div className="inner">
                <p>{title}</p>
                <span>{techs}</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  <a
                    className="projects__card--link"
                    href={adress}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Let's GO
                    <span>&#8594;</span>
                    {/* <button className="projects__card--btn">
                      Let`s go to site
                    </button> */}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
