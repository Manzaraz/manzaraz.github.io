import DeviceDetect from "../../helpers/deviceDetect";
import classes from "./Card.module.scss";

import meLight from "../../img/meLight.jpeg";
import meDark from "../../img/meDark.jpeg";
import { ThemeContext } from "../../helpers/context";
import { useContext } from "react";

const coddingVideo = "https://manzaraz.github.io/DOM/assets/%20Manzi.mp4";

const Card = () => {
  // theme darkLight
  const [{ isDark }] = useContext(ThemeContext);

  return (
    <div className={classes.card}>
      <div className={classes.card__top}>
        <div className={classes.card__browser}></div>
        <figure className={classes.card__imgCnt}>
          {DeviceDetect() === "Mobile" ? (
            <img
              src={isDark ? meDark : meLight}
              alt="Christian programming"
              className={classes.card__img}
              style={{ transition: "all .5s ease-in-out" }}
            />
          ) : (
            <video
              src={coddingVideo}
              alt="Christian Programming"
              type="video/mp4"
              className={classes.card__img}
              autoPlay
              loop
              muted
            />
          )}
        </figure>
      </div>
      <div className={classes.card__box}>
        <div className={classes.card__open}></div>
      </div>
      <div className={classes.card__down}></div>
      <div className={classes.card__caption}>ManziBook Pro</div>
    </div>
  );
};

export default Card;
