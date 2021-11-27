import { useTranslation } from "react-i18next";

import Card from "./Card";
import classes from "./About.module.scss";
import Technoligies from "./Technoligies";
import Maps from "./Maps";

const About = () => {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");
  return (
    <section className={classes.a} id="#about">
      <h3 className={`${classes.a__title} a-title`}>{t("about.a-title")}</h3>
      <div className={classes.a__container}>
        <div className={classes.a__left}>
          <div className={classes.a__left__where}>
            <h4>Soy de...</h4>
            <Maps />
          </div>
          <div className={classes.a__left__card}>
            <Card />
          </div>
          <button className={classes.a__left__btnCv}>Download my CV</button>
        </div>

        <div className={classes.a__right}>
          <p
            style={{ whiteSpace: "pre-wrap" }}
            className={`${classes.a__right__desc} .a-desc`}
          >
            {t("about.a-desc")}
          </p>
          <figure className={classes.a__know}>
            <div className={classes.a__know__img}>
              <Technoligies />
            </div>
            <figcaption className={classes.a__know__texts}>
              <h4 className={`${classes.a__know__texts__title} a-know-title`}>
                {t("about.a-know-title")}
              </h4>
              <p className={`${classes.a__know__texts__desc} a-know-desc`}>
                {t("about.a-know-desc")}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
