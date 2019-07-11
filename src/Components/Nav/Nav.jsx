import React from "react";
import nav from "./nav.css";

const NavBar = props => (
  <nav id="navbar" class="teal lighten-3">
    <div className="nav-wrapper ">
      <a href="#" className="brand-logo">
        LOGO
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="sass.html">About Us</a>
        </li>
        <li>
          <a href="badges.html">Featured Properties</a>
        </li>
        <li>
          <a href="collapsible.html">JavaScript</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
