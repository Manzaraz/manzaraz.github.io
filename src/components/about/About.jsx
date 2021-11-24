import { useTranslation } from "react-i18next";

import Award from "../../img/pngwing.png";
import Card from "./Card";
import classes from "./About.module.scss";

const About = () => {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");
  return (
    <section className="a">
      <div className="a-left">
        <div className="a-card">
          <Card />
        </div>
      </div>

      <div className="a-right">
        <h3 className="a-title">{t("about.a-title")}</h3>
        <blockquote style={{ whiteSpace: "pre-wrap" }}>
          {t("about.a-desc")}
        </blockquote>
        <figure className="a-know">
          <img src={Award} alt="" srcset="" className="a-know-img" />
          <figcaption className="a-know-texts">
            <h4 className="a-know-title">{t("a-know-title")}</h4>
            <p className="a-know-desc">{t("about.a-know-desc")}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default About;
