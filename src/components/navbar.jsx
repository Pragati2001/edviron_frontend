import React from "react";
import "../styles/navbar.css";
import WindowIcon from "@mui/icons-material/Window";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ImageIcon from "@mui/icons-material/Image";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import environ from "../assets/environ.png";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={environ} />
        </div>
        <ul>
          <li>
            <p>
              <WindowIcon />
            </p>
            <p>Dashboard</p>
          </li>
          <li>
            <p>
              <PersonOutlineIcon />
            </p>
            <p>Artists</p>
          </li>
          <li>
            <p>
              <ImageIcon />
            </p>
            <p>Projects</p>
          </li>
          <li>
            <p>
              <ReceiptIcon />
            </p>
            <p>Sales</p>
          </li>
        </ul>
        <br />
        <ul>
          <li>
            <p>
              <SettingsIcon />
            </p>
            <p>Settings</p>
          </li>
          <li>
            <p>
              <LogoutIcon />
            </p>
            <p>Logout</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}
