import React, { useState, useEffect } from "react";
import "../styles/sidebar.css";
import img8 from "../assets/img8.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import img2 from "../assets/img2.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img9 from "../assets/img9.png";
import Best_selling from "./best_selling";
export default function Sidebar() {
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });
  const [date, setDate] = useState(new Date());
  function tick() {
    setDate(new Date());
  }
  return (
    <div className="sidebar">
      <div className="admin">
        <div>
          <img className="admin_photo" src={img8} />
        </div>
        <div>
          <p className="name">Pragati Kabra</p>
        </div>
        <NotificationsIcon className="notify" />
      </div>
      <div className="product">
        <Best_selling img2={img2} img4={img4} img5={img5} name={"artists"} />
        <Best_selling img2={img6} img4={img7} img5={img9} name={"projects"} />
      </div>
      <div className="clock">
        <h2>{date.toLocaleTimeString()}.</h2>
      </div>
    </div>
  );
}
