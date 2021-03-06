/* eslint-disable jsx-a11y/anchor-is-valid */
import classes from "./Footer.module.scss";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__content}>
        <p>@Manzaraz - © 2021 All Rights Reserved</p>
        <nav className={classes.footer__content__nav}>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/manzaraz/"
                target="_blank"
                rel="noreferrer"
                className="h-about"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Manzaraz"
                className="h-about"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/magnusmanz/"
                className="h-about"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5493815091639"
                className="h-about"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
