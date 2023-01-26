import React from "react";
import "./main.scss";

export default function HeaderNav() {
  return (
    <nav className="header__nav">
      <ul className="header__nav--list">
        <li className="header__nav--item">
          <a className="header__nav--link" href="/">
            <i class="bx bx-home"></i>
            Home
          </a>
        </li>
        <li className="header__nav--item">
          <a className="header__nav--link" href="#projects">
            <i class="bx bx-briefcase"></i>
            Projects
          </a>
        </li>
        <li className="header__nav--item">
          <a className="header__nav--link" href="/">
            <i class="bx bx-info-circle"></i>
            About
          </a>
        </li>
        <li className="header__nav--item">
          <a className="header__nav--link" href="#skills">
            Skills
          </a>
        </li>
      </ul>
    </nav>
  );
}
