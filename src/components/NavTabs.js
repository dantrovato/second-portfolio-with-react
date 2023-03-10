import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="second-portfolio-with-react/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="second-portfolio-with-react/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="second-portfolio-with-react/projectsgallery"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="second-portfolio-with-react/contact"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </li>
      {/* <li className="nav-item">
        <NavLink
          to="second-portfolio-with-react/contact/learn"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Learn
        </NavLink>
      </li> */}
    </ul>
  );
}

export default NavTabs;
