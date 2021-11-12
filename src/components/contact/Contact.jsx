import "./Contact.scss";
import guyProgramming from "../../img/Developers.png";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <article className="c">
      {/* <nav className="c-bg"></nav> */}
      <section className="c-section">
        <h3 className="c-title">
          ¿Tienes una idea en mente para subirla en la web?
        </h3>
        <div className="c-wrapper">
          <article className="c-left">
            <h4 className="c-sub">Discutamos tu Proyecto.</h4>
            <p className="c-desc">
              <b>Pongámosnos en contacto. </b>
              Puedo leer tu oferta laboral. También estoy siempre disponible
              para trabajar Freelancing, si se me presenta el proyecto adecuado.
            </p>
            <img
              src={guyProgramming}
              alt="Guy Programming"
              className="c-icon"
            />
          </article>
          <article className="c-right">
            <h3 className="c-sub">Envíame un email.</h3>
            <ContactForm />
          </article>
        </div>
      </section>
    </article>
  );
};

export default Contact;
