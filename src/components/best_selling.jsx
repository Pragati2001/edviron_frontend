import React from "react";
import "../styles/sidebar.css";
export default function Best_selling({ img2, img4, img5, name }) {
  return (
    <div className="ttable">
      <h2>Best-Selling {name}</h2>
      <table>
        <tr>
          <td className="td">
            <img src={img2} />
            <p>Bluenose</p>
          </td>
          <td>40k+ sales</td>
          <td>$1.4m revenue</td>
        </tr>
        <tr>
          <td className="td">
            <img src={img4} />
            <p>Bluenose</p>
          </td>
          <td>40k+ sales</td>
          <td>$1.4m revenue</td>
        </tr>
        <tr>
          <td className="td">
            <img src={img5} />
            <p>Bluenose</p>
          </td>
          <td>40k+ sales</td>
          <td>$1.4m revenue</td>
        </tr>
      </table>
      <div className="btn">
        <span>View all {name}</span>
      </div>
    </div>
  );
}
