import React, { createContext, useContext, useState } from "react";

const SUPPORTED_LANGS = ["kg", "ru"];

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Кыргызский по умолчанию
  const [lang, setLang] = useState("kg");

  const value = {
    lang,
    setLang,
    SUPPORTED_LANGS,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// удобный хук, чтобы пользоваться контекстом
export function useLanguage() {
  return useContext(LanguageContext);
}
