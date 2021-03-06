import { useTranslation } from "react-i18next";

import classes from "./ToggleLng.module.scss";

const ToggleLng = ({ handlerMenu }) => {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  return (
    <div className="tl">
      <button
        className={classes.tl__btnEs}
        onClick={() => {
          handlerMenu();
          i18n.changeLanguage("es");
        }}
      >
        es
      </button>
      <button
        className={classes.tl__btnEn}
        onClick={() => {
          handlerMenu();
          i18n.changeLanguage("en");
        }}
      >
        en
      </button>
    </div>
  );
};

export default ToggleLng;
