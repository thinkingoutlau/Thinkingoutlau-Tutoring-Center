import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, me } from "../store/auth";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";

function Navbar() {
  const dispatch = useDispatch();
  const auth = useSelector(({ auth }) => auth);
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <>
      {auth.id ? (
        <>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSideBar} />
            </Link>
            <div className="logout">
              <button
                type="button"
                className="logout"
                onClick={() => dispatch(logout(navigate))}
              >
                Logout
              </button>
            </div>
          </div>

          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSideBar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      ) : (
        <>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSideBar} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSideBar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      )}
    </>
  );
}

export default Navbar;
