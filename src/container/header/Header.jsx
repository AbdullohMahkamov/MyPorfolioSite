import React from "react";
import HeaderLogo from "../../components/headerLogo";
import HeaderNav from "../../components/headerNav";
import HeaderTuggleBtn from "../../components/headerTuggleBtn";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__body container">
        <HeaderLogo />
        <div className="header__box">
          <HeaderNav />
          <HeaderTuggleBtn />
        </div>
      </div>
    </div>
  );
};

export default Header;
