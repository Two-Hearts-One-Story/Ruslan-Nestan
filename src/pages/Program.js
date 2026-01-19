import React from "react";
import "./Program.css";

const program = [
  {
    time: "16:00",
    title: "СБОР ГОСТЕЙ",
    desc: "Встречаемся, обнимаемся, знакомимся и настраиваемся на самый красивый вечер",
  },
  {
    time: "16:30",
    title: "ИНТЕРВЬЮ",
    desc: "Немного искренних слов, смеха и эмоций. Момент, который тронет сердца и создаст особенную атмосферу вечера",
  },
  {
    time: "17:00",
    title: "НАЧАЛО БАНКЕТА",
    desc: "Праздник официально открыт. Вкусные блюда, тёплая атмосфера и начало большого вечера вместе",
  },
  {
    time: "17:30",
    title: "ЦЕРЕМОНИЯ",
    desc: "Вы станете свидетелями трогательного момента. Приготовьте платочки",
  },
  {
    time: "22:00",
    title: "ЗАВЕРШЕНИЕ БАНКЕТА",
    desc: "Финал вечера, наполненный танцами, объятиями и самыми тёплыми воспоминаниями",
  },
];

function Program() {
  return (
    <section className="program">
      <h2 className="program-title">ПРОГРАММА ДНЯ</h2>

      <div className="program-list">
        {program.map((item, i) => (
          <div className="program-item" key={i}>
            <div className="program-main">
              <span className="program-time">{item.time}</span>
              <span className="program-dash">—</span>
              <span className="program-name">{item.title}</span>
            </div>
            <p className="program-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Program;
