import "./About.css";
import Award from "../../img/pngwing.png";

const About = () => {
  return (
    <section className="a">
      <div className="a-left">
        <div className="a-card bg"> </div>
        <div className="a-card">
          <img
            src="https://www.freelancermap.com/profileimages/anonymous-108521-xxl.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">Sobre Mí</h1>
        <p className="a-sub" style={{ whiteSpace: "pre-line" }}>
          Soy un apasionado por el desarrollo web y las tecnologías
          relacionadas. El área principal de mi experiencia radica en el
          desarrollo front-end (React), aunque también poseo experiencia como
          back-end.
        </p>
        <p className="a-desc">
          Me encanta la tecnología, escuchar música, leer libros sobre el
          desarrollo personal o cómo funciona la mente en la vida diaria, al
          mismo tiempo que investigo todo tipo de herramientas, para entender y
          sumar nuevas habilidades que se relacionan con mi carrera profesional.
        </p>
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
