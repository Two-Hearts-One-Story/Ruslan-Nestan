import React, { useState } from "react";
import "./Confirm.css";

const Confirm = () => {
  const [formData, setFormData] = useState({
    name: "",
    attending: "", // "yes" | "no"
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.attending) return;

    setSubmitted(true);

    const presence =
      formData.attending === "yes"
        ? "Да, с удовольствием"
        : "К сожалению, не сможет";

    const text =
      `💌 Новая анкета:\n` +
      `Имя: ${formData.name}\n` +
      `Присутствие: ${presence}`;

    // позже подставишь свои значения
    const BOT_TOKEN = "8543611608:AAFcq2V_ZkT9Yb8gy85Mb9yNgNiDbJSugMI";
    const CHAT_ID = "-1003526831462";

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(
      text
    )}`;

    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(
      telegramUrl
    )}&ts=${Date.now()}`;

    fetch(proxyUrl, { method: "GET", cache: "no-store" })
      .then((res) => res.text())
      .then(() => console.log("✅ Sent to TG"))
      .catch((err) => console.error("❌ Proxy failed:", err));
  }

  return (
    <section className="anketa-page">
      <div className="anketa-inner">
        <h1 className="anketa-title">АНКЕТА</h1>

        <p className="anketa-subtitle">
          Будем очень признательны, если Вы сообщите
          <br />
          нам о своём решении до 5.09.24:
        </p>

        {!submitted ? (
          <form className="anketa-form" onSubmit={handleSubmit}>
            {/* Имя */}
            <div className="anketa-block">
           <div className="anketa-label">Имя и фамилия</div>

                <input
                  className="anketa-input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

            </div>

      

            {/* Вопрос */}
            <div className="anketa-block">
              <div className="anketa-question">Планируете ли вы присутствовать?</div>

              <label className="anketa-choice">
                <input
                  className="anketa-choiceInput"
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={formData.attending === "yes"}
                  onChange={handleChange}
                  required
                />
                <span className="anketa-box" aria-hidden="true" />
                <span className="anketa-choiceText">Да, с удовольствием!</span>
              </label>

              <label className="anketa-choice">
                <input
                  className="anketa-choiceInput"
                  type="radio"
                  name="attending"
                  value="no"
                  checked={formData.attending === "no"}
                  onChange={handleChange}
                  required
                />
                <span className="anketa-box" aria-hidden="true" />
                <span className="anketa-choiceText">К сожалению, не смогу</span>
              </label>

              <button type="submit" className="anketa-submit">
                отправить
              </button>
            </div>
          </form>
        ) : (
          <div className="anketa-sent">
            <div className="anketa-sentTitle">Спасибо!</div>
            <div className="anketa-sentText">Ваш ответ отправлен.</div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Confirm;
