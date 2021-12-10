import { useContext } from "react";
import classes from "./ToggleTheme.module.scss";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { ThemeContext } from "../../helpers/context";

const ToggleTheme = ({ handlerMenu }) => {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div className={classes.tt}>
      <img src={Sun} alt="" className={classes.tt__icon} />
      <img src={Moon} alt="" className={classes.tt__icon} />

      <div
        className={classes.tt__button}
        onClick={() => {
          handlerMenu();
          toggleTheme();
        }}
        style={{
          left: isDark ? "0" : "25px",
          transition: "all 0.5s ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default ToggleTheme;
