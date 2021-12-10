/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { RiMenu5Fill, RiCloseFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

import classes from "./Header.module.scss";
import Toggles from "../toggle/Toggles";
import { Outlet } from "react-router-dom";

const Header = () => {
  const [t] = useTranslation("global");

  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handlerSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handlerSize);
    return () => {
      window.removeEventListener("resize", handlerSize);
    };
  }, []);

  useEffect(() => {
    if (size.with > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const handlerMenu = () => window.innerWidth < 768 && setMenuOpen((p) => !p);

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>
          <a href="/">⌘Christian</a>
        </h2>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <a href="#about" onClick={handlerMenu} className="h-about">
                {t("header.h-about")}
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={handlerMenu}
                className="h-portfolio"
              >
                {t("header.h-portfolio")}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handlerMenu} className="h-contact">
                {t("header.h-contact")}
              </a>
            </li>
          </ul>
          <Toggles handlerMenu={handlerMenu} />
        </nav>
        <div className={classes.header__content__menu}>
          {!menuOpen ? (
            <RiMenu5Fill
              onClick={handlerMenu}
              className={classes.header__open}
            />
          ) : (
            <RiCloseFill
              onClick={handlerMenu}
              className={classes.header__close}
            />
          )}
        </div>
        <Outlet />
      </div>
    </header>
  );
};

export default Header;
