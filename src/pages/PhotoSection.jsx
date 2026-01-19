import React, { useEffect, useMemo, useState } from "react";
import "./PhotoSection.css";

import photo from "../assets/g5.JPG";

function pad2(n) {
  return String(n).padStart(2, "0");
}

function calcLeft(targetDate) {
  const now = new Date();
  let diff = targetDate.getTime() - now.getTime();
  if (diff < 0) diff = 0;

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { totalMs: diff, days, hours, minutes, seconds };
}

export default function PhotoSection() {
  // ⚠️ год поменяй при необходимости
  const target = useMemo(() => new Date(2026, 0, 31, 16, 0, 0), []);
  const [left, setLeft] = useState(() => calcLeft(target));

  useEffect(() => {
    const t = setInterval(() => setLeft(calcLeft(target)), 250);
    return () => clearInterval(t);
  }, [target]);

  return (
    <section
      className="photo-section"
      style={{ backgroundImage: `url(${photo})` }}
      aria-label="Фото с отсчётом"
    >
      {/* общий софт-оверлей */}
      <div className="photo-section__overlay" aria-hidden="true" />
      {/* затемнение снизу под текст */}
      <div className="photo-section__fade" aria-hidden="true" />

      <div className="countdown-overlay">
        <div className="countdown-title">ДО ВСТРЕЧИ ЧЕРЕЗ</div>

        <div className="countdown-row">
          <div className="countdown-cell">
            <div className="countdown-num">{left.days}</div>
            <div className="countdown-label">ДНЕЙ</div>
          </div>

          <div className="countdown-cell">
            <div className="countdown-num">{pad2(left.hours)}</div>
            <div className="countdown-label">ЧАСА</div>
          </div>

          <div className="countdown-cell">
            <div className="countdown-num">{pad2(left.minutes)}</div>
            <div className="countdown-label">МИНУТА</div>
          </div>

          <div className="countdown-cell">
            <div className="countdown-num">{pad2(left.seconds)}</div>
            <div className="countdown-label">СЕКУНД</div>
          </div>
        </div>
      </div>
    </section>
  );
}
