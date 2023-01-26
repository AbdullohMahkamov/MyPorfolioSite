import React from "react";
import HeroMain from "../../components/hero";
// import Projects from "../../components/projects";
import "./style.css";
import { useSelector } from "react-redux";
import ProjectsNav from "../../components/projectsNav";
import ProjectsCards from "../../components/ProjectsCards";
import TechSkills from "../../components/techSkills";
import Marquee from "react-fast-marquee";

const LandingPage = () => {
  const { projectsData } = useSelector((store) => store.cart);
  const { sliderData } = useSelector((store) => store.slider);
  return (
    <div className="landing__page">
      <HeroMain />
      <ProjectsNav n/>
      <div className="container">
        <div className="projects__cards">
          {projectsData.map((item) => {
            return <ProjectsCards key={item.id} {...item} />;
          })}
        </div>
        <div className="Slider">
          <div>
            <h2 className="slider__title">Skills</h2>
          </div>
          <span className="slider__span"></span>
          <Marquee>
            <div className="Slider__body">
              {sliderData.map((skills, skillsIndex) => {
                return (
                  <TechSkills
                    key={skills.id}
                    {...skills}
                    skillsIndex={skillsIndex}
                  />
                );
              })}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
