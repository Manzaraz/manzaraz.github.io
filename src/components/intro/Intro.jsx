import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { gsap } from "gsap";

import classes from "./Intro.module.scss";
import avatar from "../../img/me1.png";

const Intro = () => {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");

  const timeline = gsap.timeline({ defaults: { opacity: 0 } });

  useEffect(() => {
    const iGreetings = document.querySelectorAll(".i-intro"),
      iName = document.querySelector(".i-name"),
      iTitle = document.querySelector(".i-title"),
      iDesc = document.querySelector(".i-desc"),
      iScroll = document.querySelector(".i-scroll"),
      iBg = document.querySelector(".i-bg"),
      iImg = document.querySelector(".i-img");

    timeline
      .from(iGreetings, {
        opacity: 0,
        y: -200,
        duration: 1.5,
        stagger: 0.3,
      })
      .from(iName, { duration: 3 })
      .from(iTitle, { x: -50, duration: 1 }, "-=2")
      .from(iDesc, { duration: 2 })
      .from(iBg, { x: 200, duration: 2 }, "-= 4")
      .from(iImg, { duration: 1 }, "-=5")
      .from(
        iScroll,
        { duration: 1, rotation: 360, y: 100, stagger: 0.5 },
        "=-3"
      );
  }, []);

  return (
    <section className={classes.i}>
      <div className={classes.i__left}>
        <div className={classes.i__left__wrapper}>
          <h1 className={`${classes.i__intro} i-intro`}>
            {t("intro.i-intro")}
            <div className={`${classes.i__name} i-name`}>
              Christian Manzaraz
            </div>
            <div className={`${classes.i__title} i-title`}>
              <div className={classes.i__title__wrapper}>
                <div className={classes.i__title__item}>
                  JavaScript Full-Stack Developer
                </div>
                <div className={classes.i__title__item}>Frontend</div>
                <div className={classes.i__title__item}>Backend</div>
              </div>
            </div>
          </h1>
          <h2 className={`${classes.i__desc} i-desc`}>{t("intro.i-desc")}</h2>
        </div>
        <div className={classes.i__mouse}></div>
      </div>
      <div className={classes.i__right}>
        <div className={`${classes.i__bg} i-bg`}></div>
        <img
          src={avatar}
          alt="Christian Manzaraz"
          className={`${classes.i__img} i-img`}
        />
      </div>
    </section>
  );
};

export default Intro;
