import React from "react";
import "./SideNav.css";
import { GoHome } from "react-icons/go";
import { MdOutlineExplore, MdOutlineWatchLater } from "react-icons/md";
import { RiPlayListAddFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const SideNav = () => {
  return (
    <aside>
      <nav>
        <ul>
          <NavLink to='/'>
          <li className="navs">
            <div>
              <span>
                <GoHome />
              </span>{" "}
              Home
            </div>
          </li>
          </NavLink>
          <NavLink to='/explore'>
          <li className="navs">
            <div>
              <span>
                <MdOutlineExplore />
              </span>{" "}
              Explore
            </div>
          </li>
          </NavLink>
          <NavLink to='/playlists'>
          <li className="navs">
            <div>
              <span>
                <RiPlayListAddFill />
              </span>
              playlists
            </div>
          </li>
          </NavLink>
          <NavLink to='/watch-later'>
            <li className="navs">
              <div>
                <span>
                  <MdOutlineWatchLater />
                </span>
                Watch later
              </div>
            </li>
          </NavLink>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
