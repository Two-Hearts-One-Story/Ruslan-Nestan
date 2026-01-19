import React from "react";
import "./Location.css";
import glasses from "../assets/g7.JPG";


export default function Location() {
  return (
    <section className="location">
      <div className="location-frame">

        <h2 className="location-title">ЛОКАЦИЯ</h2>

        <p className="location-address">
          город Бишкек,<br />
          ул. 7 апреля, 147/1.
        </p>

        <h3 className="location-place">ASMAN BANQUET HALL</h3>

        <a
          href="hhttps://2gis.kg/bishkek/geo/70000001039576605/74.637695,42.839003"
          target="_blank"
          rel="noreferrer"
          className="location-mapBtn"
        >
          перейти к карте
        </a>

        <div className="location-timeBlock">
          <div className="location-timeLabel">СБОР ГОСТЕЙ</div>
          <div className="location-time">16:00</div>
        </div>

        <img
        src={glasses}
        alt=""
        className="location-overlay"
      />

      </div>
    </section>
  );
}
