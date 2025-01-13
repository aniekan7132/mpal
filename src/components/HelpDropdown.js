import React, { useState } from "react";
import { Link } from "react-router-dom";
import { helpDropdown } from "./NavItems";
import "../css/helpDropdown.css";

const HelpDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "help-submenu clicked" : "help-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {helpDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default HelpDropdown;
