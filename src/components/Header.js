import { RES_LOGO } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const user = useContext(UserContext);
  console.log(user?.loggedInUser);
  return (
    <div className="header">
      <div className="logo-div">
        <img src={RES_LOGO} className="header-logo"></img>
      </div>

      <div className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">{onlineStatus ? "🟢" : "⚫"}</li>
          <li className="nav-item">
            <Link to="/"> Home </Link>
          </li>
          <li className="nav-item">
            <Link to="/grocery"> Grocery </Link>
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
          <li className="nav-item">
            <h3>{user?.loggedInUser}</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
