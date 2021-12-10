import ToggleLng from "./ToggleLng";
import classes from "./Toggles.module.scss";
import ToggleTheme from "./ToggleTheme";

const Toggles = ({ handlerMenu }) => {
  return (
    <div className={classes.t}>
      <ToggleLng className={classes.t__toggle} handlerMenu={handlerMenu} />
      <ToggleTheme className={classes.t__toggle} handlerMenu={handlerMenu} />
    </div>
  );
};

export default Toggles;
