/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet } from "react-router-dom";
import classes from "./Footer.module.scss";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

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
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
