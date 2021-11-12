import { useTranslation } from "react-i18next";
import "./TogleLng.scss";
// import { ThemeContext } from "../../helpers/context";

const ToggleLng = () => {
  //   const theme = useContext(ThemeContext);

  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  return (
    <div className="tl">
      <button
        className="tl-btn tl-btn-es"
        onClick={() => {
          i18n.changeLanguage("es");
        }}
      >
        es
      </button>
      <button
        className="tl-btn tl-btn-en"
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        en
      </button>
    </div>
  );
};

export default ToggleLng;
