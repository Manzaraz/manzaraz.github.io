import { useTranslation } from "react-i18next";

import Award from "../../img/pngwing.png";
import Card from "./Card";
import "./About.scss";

const About = () => {
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
        {/* <p className="a-sub" style={{ whiteSpace: "pre-line" }}>
          Soy un apasionado por el desarrollo web y las tecnologías
          relacionadas.
        </p>
        <p className="a-sub" style={{ whiteSpace: "pre-line" }}>
          El área principal de mi experiencia radica en el desarrollo
          front-end(React) y aunque también poseo experiencia como back-end y
          sus tecnologías relacionadas (NodeJS, MongoDB, PostgreSQL, ExpressJS y
          SequelizeORM ), debo confesar.
        </p> */}
        <blockquote style={{ whiteSpace: "pre-wrap" }}>
          {t("about.a-desc")}
        </blockquote>
        <figure className="a-award">
          <img src={Award} alt="" srcset="" className="a-award-img" />
          <figcaption className="a-award-texts">
            <h4 className="a-award-title">Design & Mockup</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              explicabo ipsam, facilis odio laborum eligendi possimus recusandae
              harum maxime ex eaque quis asperiores temporibus voluptates
              accusamus ipsa atque ipsum sint.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default About;
