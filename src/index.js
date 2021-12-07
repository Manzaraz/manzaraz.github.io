import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

import "./styles/index.scss";
import { ThemeProvider } from "./helpers/context";

import App from "./pages/App";
import Pdf from "./pages/Pdf";

i18next.use(LanguageDetector).init({
  interpolation: {
    fallbackLng: ["es", "en"], //
    escapeValue: false,
  },
  // lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider style={{ width: 0, height: 0 }}>
      <I18nextProvider style={{ width: 0, height: 0 }} i18n={i18next}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/pdf" element={<Pdf />} />
            <Route
              path="*"
              element={
                <article style={{ padding: "1.5rem" }}>
                  <p>Pst... There's nothing here! </p>
                </article>
              }
            />
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
