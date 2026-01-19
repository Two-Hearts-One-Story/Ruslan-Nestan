import React from "react";
import "./Invite.css";

import couple from "../assets/couple.jpg";
import couple1 from "../assets/g4.JPG";
import g2 from "../assets/g9.JPG";

function Invite() {
  return (
    <section className="invite">
      <div className="invite-container">
        <h2 className="invite-title">ДОРОГИЕ ГОСТИ!</h2>

        <p className="invite-text">
          С большой радостью приглашаем вас на наш первый семейный праздник —
          нашу свадьбу. Мы очень хотим, чтобы в этот день с нами рядом были
          самые близкие люди.
        </p>

        <div className="photo-collage">
          <img src={couple} className="photo side" alt="" />
          <img src={g2} className="photo main" alt="" />
          <img src={couple1} className="photo top" alt="" />
        
<svg className="date-wave" viewBox="0 0 220 520" xmlns="http://www.w3.org/2000/svg">


  {/* буквы “столбиком” по дуге, но НЕ повернутые */}
  <text className="mono" x="230" y="150">N</text>
  <text className="mono" x="140" y="240">&amp;</text>
  <text className="mono" x="150" y="370">R</text>
</svg>

      <div className="invite-date">
        31 · 01 · 26
      </div>




        </div>
      </div>
    </section>
  );
}

export default Invite;