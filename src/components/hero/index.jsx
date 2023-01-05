import React from "react";
import "./main.css";

export default function HeroMain() {
  return (
    <div className="hero">
      <div className="hero__body container">
        <div className="hero__main">
          <div className="hero__content">
            <img className="hero__content--img" src="heroImg.png" alt="img" />
            <div className="hero__content--desk">
              <h2 className="hero__content--desk--firstTitle">
                Assalamu alaykum
              </h2>
              <span className="hero__content--desk--firstTitle--span">
                va rohmatullohi va barokatuh.
              </span>
              <span className="hero__content--desk--secondTitle--span">
                Bu men
              </span>
              <h2 className="hero__content--desk--secondTitle">
                Abdulloh Mahkamov
              </h2>
              <p className="hero__content--desk--text">
                Draft is a revolutionary mobile app built to help you manage
                your business easily and save your money.
              </p>
              <div className="hero__content--desk--btns">
                <button className="hero__content--desk--btns--projects">
                  See Projects <i className="bx bx-right-arrow-alt"></i>
                </button>

                <a className="hero__content--desk--btns--link" href="https://drive.google.com/file/d/1Ga9s-W_EGJ6jyyZbpnRm866sX6Fog7H0/view">
                  <button className="hero__content--desk--btns--CV">
                    Download Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
          <ul className="hero__main--list">
            <li className="hero__main--item">
              <img
                className="hero__main--item--htmlImg"
                src="mainHeroHtml.svg"
                alt="logo"
              />
              <span className="hero__main--html5">HTML5</span>
            </li>
            <li className="hero__main--item">
              <img
                className="hero__main--item--cssImg"
                src="heroMainCss.png"
                alt="logo"
              />
              <span className="hero__main--css3">CSS3</span>
            </li>
            <li className="hero__main--item">
              <img
                className="hero__main--item--jsImg"
                src="heroMainJs.svg"
                alt="logo"
              />
              <span className="hero__main--js">JavaScript</span>
            </li>
            <li className="hero__main--item">
              <img
                className="hero__main--item--reactImg"
                src="heroMainReact.svg"
                alt="logo"
              />
              <span className="hero__main--react">React</span>
            </li>
          </ul>
          <span className="hero__main--plus">
            <i class="bx bx-plus-medical"></i>
          </span>
          <span className="hero__main--rectangle"></span>
        </div>
      </div>
    </div>
  );
}
