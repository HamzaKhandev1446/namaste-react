import { RES_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-div">
        <img src={RES_LOGO} className="header-logo"></img>
      </div>

      <div className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/"> Home </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus"> About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contactus"> Contact Us </Link>
          </li>
          <li className="nav-item">
            <Link to="/"> Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
