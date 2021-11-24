import ToggleLng from "./ToggleLng";
import classes from "./Toggles.module.scss";
import ToggleTheme from "./ToggleTheme";

const Toggles = ({ handleMenu }) => {
  return (
    <div className={classes.t}>
      <ToggleLng onClick={handleMenu} className={classes.t__toggle} />
      <ToggleTheme className={classes.t__toggle} />
    </div>
  );
};

export default Toggles;
