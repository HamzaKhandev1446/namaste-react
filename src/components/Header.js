import { RES_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-div">
        <img
          src={RES_LOGO}
          className="header-logo"
        ></img>
      </div>

      <div className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
