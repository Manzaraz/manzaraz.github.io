import { useContext } from "react";
import classes from "./ToggleTheme.module.scss";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { ThemeContext } from "../../helpers/context";

const ToggleTheme = () => {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div className={classes.tt}>
      <img src={Sun} alt="" className={classes.tt__icon} />
      <img src={Moon} alt="" className={classes.tt__icon} />

      <div
        className={classes.tt__button}
        onClick={toggleTheme}
        style={{
          left: isDark ? "0" : "25px",
          transition: "all 0.5s ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default ToggleTheme;

// import { useContext } from "react";

// import classes from "./ToggleTheme.module.scss";
// import Sun from "../../img/sun.png";
// import Moon from "../../img/moon.png";
// import { ThemeContext } from "../../helpers/context";

// const ToggleTheme = () => {
//   const theme = useContext(ThemeContext);

//   const handleClick = () => {
//     theme.dispatch({ type: "TOGGLE" });
//   };

//   return (
//     <div className={classes.tt}>
//       <img src={Sun} alt="" className={classes.tt__icon} />
//       <img src={Moon} alt="" className={classes.tt__icon} />

//       <div
//         className={classes.tt__button}
//         onClick={handleClick}
//         style={{
//           left: theme.state.darkMode ? "0" : "25px",
//           transition: "all 0.5s ease-in-out",
//         }}
//       ></div>
//     </div>
//   );
// };

// export default ToggleTheme;
