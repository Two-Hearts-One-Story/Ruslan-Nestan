import React from "react";
import "./DressCodeCard.css";
import dressCodeImg from '../assets/g3.JPG'; // путь от текущего файла


export default function DressCodeCard({ imageSrc }) {
  return (
    <div className="dc-page">
      <div className="dc-card">
        <div className="dc-top">
          <div className="dc-side">
            <div className="dc-vertical">DRESS CODE</div>
          </div>

          <div className="dc-photoWrap">
            {/* можно заменить на <img loading="lazy" .../> */}
            <img className="dc-photo" src={dressCodeImg} alt="Dress code" />

          </div>
        </div>

        <div className="dc-bottom">
          <p className="dc-text">
            Мы очень ждем и с удовольствием готовимся к нашему празднику! Будем рады,
            если вы поддержите цветовую гамму нашей свадьбы
          </p>

          <div className="dc-swatches" aria-label="Wedding palette">
            <span className="dc-swatch s1" />
            <span className="dc-swatch s2" />
            <span className="dc-swatch s3" />
            <span className="dc-swatch s4" />
            <span className="dc-swatch s5" />
            <span className="dc-swatch s6" />
          </div>
        </div>
      </div>
    </div>
  );
}
