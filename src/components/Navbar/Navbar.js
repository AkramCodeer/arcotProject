import React, { useState } from "react";
import { MenuData } from "./MenuData";
import "../Style/Navbar.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="background">
      <nav className="NavbarItem">
        <h1 className="logo">
          <img src="logo.png" alt="Logo" style={{ width: "90px" }} />
        </h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => (
            <li key={index}>
              <a href={item.url} className={item.className}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
