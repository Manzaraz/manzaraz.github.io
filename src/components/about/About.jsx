import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Card from "./Card";
import classes from "./About.module.scss";
import Technoligies from "./Technoligies";
import Maps from "./Maps";
import DeviceDetect from "../../helpers/deviceDetect";
import cv from "../../docs/cvManzi.pdf";
import DownloadBtn from "./DownloadBtn";

const About = () => {
  // translation
  // eslint-disable-next-line
  const [t] = useTranslation("global");

  let description = t("about.a-desc");

  return (
    <section className={classes.a} id="about">
      <div className={classes.a__container}>
        <div className={classes.a__left}>
          <figure className={classes.a__left__where}>
            <h4>{t("about.a-where")}</h4>
            <Maps />
            <figcaption>{t("about.a-from")}</figcaption>
          </figure>
          <div className={classes.a__left__card}>
            <Card />
          </div>
          <DownloadBtn name={t("about.a-btn")} />
          {/* <Link to="/pdf" className={classes.a__left__btnCv} target="_blank">
            {t("about.a-btn")}
          </Link> */}
        </div>

        <div className={classes.a__right}>
          <h3 className={`${classes.a__title} a-title`}>
            {t("about.a-title")}
          </h3>
          <p
            style={{ whiteSpace: "pre-wrap" }}
            className={`${classes.a__right__desc} .a-desc`}
          >
            {DeviceDetect() === "Mobile"
              ? description.slice(0, 140).concat(t("about.a-more"))
              : description}
          </p>
          <figure className={classes.a__know}>
            <figcaption className={classes.a__know__texts}>
              <h4 className={`${classes.a__know__texts__title} a-know-title`}>
                {t("about.a-know-title")}
              </h4>
              <p className={`${classes.a__know__texts__desc} a-know-desc`}>
                {t("about.a-know-desc")}
              </p>
            </figcaption>
            <div className={classes.a__know__img}>
              <Technoligies />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
