import { techs } from "../../helpers/data";
import classes from "./Technologies.module.scss";

const Technoligies = () => {
  return (
    <div className={classes.tech}>
      {techs.map((el) => (
        <div className={classes.tech__wrapper}>
          <figure key={el.id} className={classes.tech__fig}>
            <img
              className={classes.tech__fig__img}
              src={el.icon}
              alt={el.tech}
            />
            <figcaption className={classes.tech__fig__fc}>{el.tech}</figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Technoligies;
