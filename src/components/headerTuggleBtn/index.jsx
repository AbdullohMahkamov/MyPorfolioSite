import React from "react";
import "./main.scss";

export default function HeaderTuggleBtn() {
  // const [change, setChange] = useState(true);
  return (
    <div className="header__tuggleBtn">
      <button className="header__tuggleBtn--Lightbtn">
        <i className="bx bx-moon"></i>
      </button>
      {/* <button>
        <i class="bx bxs-moon"></i>
      </button> */}
    </div>
  );
}
