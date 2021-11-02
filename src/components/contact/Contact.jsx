import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h3 className="c-title">Let's discuss your project</h3>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="Phone" className="c-icon" />
              +5493815091639
            </div>
            <div className="c-info-item">
              <img src={Email} alt="email" className="c-icon" />
              manzaraz@hotmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="Address" className="c-icon" />
              San Miguel de Tucumán, Argentina
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always aviable for
            freelancing if the right project comes along me.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
