import React from "react";
import "./DetailsPage.css";

import wishTop from "../assets/g7.JPG";     // фото справа сверху (букет в руках)
import wishBottom from "../assets/g9.JPG"; // фото слева снизу (детали)

export default function DetailsPage() {
  return (
    <section className="wish">
      <div className="wish-card">
        <h1 className="wish-title">ПОЖЕЛАНИЯ</h1>

        <div className="wish-grid">
          {/* ЛЕВАЯ КОЛОНКА */}
          <div className="wish-col wish-col--left">
            <p className="wish-text wish-text--left">
              Возьмите с собой хорошее настроение. Приветствуются ваши поздравления 
              и актичное участие в интерактивах танцах!
            </p>

            <div className="wish-photo wish-photo--bottom">
              <img src={wishBottom} alt="" />
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА */}
          <div className="wish-col wish-col--right">
            <div className="wish-photo wish-photo--top">
              <img src={wishTop} alt="" />
            </div>

            <p className="wish-text wish-text--right">
              Чета еще не знаю че 
            
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
