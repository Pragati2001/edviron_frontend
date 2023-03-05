import React from "react";
import "../styles/main.css";
import img2 from "../assets/img2.png";
import img3 from "../assets/img7.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
export default function Main() {
  return (
    <div className="main">
      <div class="v1_142">
        <div class="v1_143"></div>
        <div class="v1_144">
          <div class="name"></div>
          <span class="v1_146">Search artists, projects</span>
        </div>
      </div>
      <p>In the last 30 days,</p>
      <div className="container">
        <div className="first">
          <span>30,000</span>
          <span>Art Sales</span>
        </div>
        <div className="second">
          <span>250</span>
          <span>New artists</span>
        </div>
        <div className="third">
          <span>$400,000</span>
          <span>Revenue generated</span>
        </div>
      </div>
      <div className="artists">
        <div className="artist_name">
          <p className="one">All artists</p>
          {/* <p className="two">Monitor artists sales review etc</p> */}
        </div>
        <input placeholder="Search" />
      </div>
      <div className="table">
        <table className="content">
          <thead>
            <tr>
              <th>Artist</th>
              <th>Status</th>
              <th>Ratings</th>
              <th>Projects sold</th>
              <th>Highest sale</th>
            </tr>
          </thead>
          <tr>
            <td className="td">
              <img src={img2} />
              <p>Bluenose</p>
            </td>
            <td>
              <p className="verify">verified</p>
            </td>
            <input
              class="range-slider_input"
              type="range"
              value="50"
              min="0"
              max="100"
            />{" "}
            50%
            <td>400</td>
            <td>400,000</td>
          </tr>
          <tr>
            <td className="td">
              <img src={img5} />
              <p>pennywise</p>
            </td>
            <td>
              <p className="pending">pending</p>
            </td>
            <input
              class="range-slider_input"
              type="range"
              value="10"
              min="0"
              max="100"
            />{" "}
            10%
            <td>400</td>
            <td>400,000</td>
          </tr>
          <tr>
            <td className="td">
              <img src={img3} />
              <p>Floatsam</p>
            </td>
            <td>
              <p className="verify">verified</p>
            </td>
            <input
              class="range-slider_input"
              type="range"
              value="80"
              min="0"
              max="100"
            />{" "}
            80%
            <td>400</td>
            <td>400,000</td>
          </tr>
          <tr>
            <td className="td">
              <img src={img4} />
              <p>Gregautsch</p>
            </td>
            <td>
              <p className="verify">verified</p>
            </td>
            <input
              class="range-slider_input"
              type="range"
              value="40"
              min="0"
              max="100"
            />{" "}
            40%
            <td>400</td>
            <td>400,000</td>
          </tr>
          <tr>
            <td className="td">
              <img src={img6} />
              <p>EIPistolero</p>
            </td>
            <td>
              <p className="pending">pending</p>
            </td>
            <td>
              <input
                class="range-slider_input"
                type="range"
                value="20"
                min="0"
                max="100"
              />{" "}
              20%
            </td>
            <td>400</td>
            <td>400,000</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
