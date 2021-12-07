import classes from "./Contact.module.scss";
import guyProgramming from "../../img/Developers.png";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className={classes.c} id="contact">
      <div className={classes.c__wrapper}>
        <article className={classes.c__left}>
          <h3 className={classes.c__title} style={{ whiteSpace: "pre-wrap" }}>
            {t("contact.c-title")}
          </h3>
          <div className={classes.c__info}>
            <blockquote
              style={{ whiteSpace: "pre-wrap" }}
              className={classes.c__info__desc}
            >
              {t("contact.c-desc")}
            </blockquote>
            <img
              src={guyProgramming}
              alt="Guy Programming"
              className={classes.c__info__img}
            />
          </div>
        </article>
        <article className={classes.c__right}>
          <h4 className={classes.c__right__sub}>{t("contact.c-send")}</h4>
          <figure className={classes.c__right__cf}>
            <ContactForm />
          </figure>
        </article>
      </div>
    </section>
  );
};

export default Contact;
