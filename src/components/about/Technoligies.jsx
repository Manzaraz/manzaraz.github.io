import { techs } from "../../helpers/data";
import classes from "./Technologies.module.scss";

const Technoligies = () => {
  return (
    <div className={classes.tech}>
      <div className={classes.tech__wrapper}>
        {techs.map((el) => (
          <figure key={el.id} className={classes.tech__fig}>
            <img
              className={classes.tech__fig__img}
              src={el.icon}
              alt={el.tech}
            />
            <figcaption className={classes.tech__fig__fc}>{el.tech}</figcaption>
            <br />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Technoligies;
