import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "./NavItems";
import "../css/navBar.css";
import InvestDropDown from "./InvestDropDown";
import HelpDropDown from "./HelpDropdown";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [helpDropDown, setHelpDropDown] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [closeDropdown, setCloseDropdown] = useState(true);

  const handleClickOpen = (e) => {
    setOpen(true);
    setClose(false);
    e.stopPropagation();
  };

  const handleClickClose = () => {
    setOpen(false);
    setClose(true);
  };

  const openHelpDropdown = () => {
    setOpenDropdown(true);
    setCloseDropdown(false);
  }

  const closeHelpDropDown = () => {
    setOpenDropdown(false);
    setCloseDropdown(true)
  }

  return (
    <nav className="navbar">
      <Link className="navbar-logo" to="/">
        Mercuryo<span>INVESTMENT • PAL</span>
      </Link>
      {toggleMenu && (
        <div className="navbar-mobile-nav-cont">
          <RiCloseLine
            className="mobile-menu-icon-close"
            cursor="pointer"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
          <div className="navbar-mob-link-cont">
            <div className="mobile-dropdown-cont">
              <div>
                <div className="navbar-mob-link-div">
                  <Link to="#">Invest</Link>
                  <p>
                    {close && (
                      <FaAngleDown cursor="pointer" onClick={handleClickOpen} />
                    )}
                    {open && (
                      <IoIosArrowUp
                        cursor="pointer"
                        onClick={handleClickClose}
                      />
                    )}
                  </p>
                </div>
                {open && (
                  <div className="navbar-mobile-links">
                    <Link to="/cryptocurrency">Cryptocurrency</Link>
                    <Link to="/stocks">Stocks</Link>
                    <Link to="/etfs">Etfs</Link>
                    <Link to="/metals">Metals</Link>
                    <Link to="/commodities">Commodities</Link>
                  </div>
                )}
              </div>
              <div className="navbar-mob-link-div">
                <Link to="">Features</Link>
                {/* <p>
                  {close && (
                    <FaAngleDown cursor="pointer" onClick={handleClickOpen} />
                  )}
                  {open && (
                    <IoIosArrowUp cursor="pointer" onClick={handleClickClose} />
                  )}
                </p> */}
              </div>
              <div className="navbar-mob-link-div">
                <Link to="">Company</Link>
                {/* <p>
                  {close && (
                    <FaAngleDown cursor="pointer" onClick={closeHelpDropDown} />
                  )}
                  {open && (
                    <IoIosArrowUp cursor="pointer" onClick={handleClickClose} />
                  )}
                </p> */}
              </div>
              <div className="navbar-mob-link-div">
                <Link to="">Security</Link>
                {/* <p>
                  {close && (
                    <FaAngleDown cursor="pointer" onClick={handleClickOpen} />
                  )}
                  {open && (
                    <IoIosArrowUp cursor="pointer" onClick={handleClickClose} />
                  )}
                </p> */}
              </div>
              <div className="navbar-mob-link-div">
                <Link to="">Help</Link>
                <p>
                  {closeDropdown && (
                    <FaAngleDown cursor="pointer" onClick={openHelpDropdown} />
                  )}
                  {openDropdown && (
                    <IoIosArrowUp cursor="pointer" onClick={closeHelpDropDown} />
                  )}
                </p>
              </div>
              {openDropdown && (
                <div className="navbar-mobile-links">
                  <Link to="/how-to-get-started">How to get started</Link>
                  <Link to="/who-can-use-mercuryo">Who can use Mercuryo</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <ul className="nav-items">
        {navItems.map((item) => {
          if (item.title === "Invest") {
            return (
              <li
                key={item.id}
                className={item.cName}
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <Link to={item.path}>{item.title}</Link>
                {dropdown && <InvestDropDown />}
              </li>
            );
          }
          if (item.title === "Help") {
            return (
              <li
                key={item.id}
                className={item.cName}
                onMouseEnter={() => setHelpDropDown(true)}
                onMouseLeave={() => setHelpDropDown(false)}
              >
                <Link to={item.path}>{item.title}</Link>
                {helpDropDown && <HelpDropDown />}
              </li>
            );
          }
          return (
            <li key={item.id} className={item.cName}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <div className="nav-button">
        <div>
          <Link to="" className="navbar-btn" handleClick={() => {}}>
            Sign-Up
          </Link>
        </div>
        <div>
          <Link
            to=""
            className="navbar-btn navbar-btn-light"
            handleClick={() => {}}
          >
            login
          </Link>
        </div>
        <div className="navbar-menu-cont">
          <RiMenuLine
            className="mobile-menu-icon"
            // cursor="pointer"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
