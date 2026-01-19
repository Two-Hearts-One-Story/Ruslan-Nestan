import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="hero__effects" />

      <div className="hero__content">
        <div className="hero__top">love</div>

        <div className="hero__middle">
          <div className="hero__date">
            <span className="hero__slashes"></span>
            <span>24 января 2026</span>
          </div>
        </div>

        <div className="hero__bottom">
          <h1 className="hero__names">Руслан и Нестан</h1>

          <div className="hero__scroll" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
