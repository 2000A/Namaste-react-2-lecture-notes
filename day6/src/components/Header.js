import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";
const Header = () => {
//   let btnName = "login";
console.log("Header Render")
  const [btnNameReact, setBtnNameReact] = useState("Login")
  return (
    <div className="header">
      <div className="logo-container">
        <img alt="company logo" className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button 
          className="login-btn" 
          onClick={() => 
          { btnNameReact === "Login"? setBtnNameReact("Logout"):setBtnNameReact("Login")}}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
