import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav> 🏃‍♂️ Get to Complete Your Daily Goals 🔥</nav>

      <div className="header">
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
export default Header;
