import { useEffect, useState } from "react";
import { RiMenu5Fill, RiCloseFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

import ToggleLng from "../toggle/ToggleLng";

import classes from "./Header.module.scss";
import ToggleTheme from "../toggle/ToggleTheme";
import Toggles from "../toggle/Toggles";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({ width: undefined, height: undefined });
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, size.height]);

  const handleMenu = (e) => {
    setMenuOpen((e) => !e);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>
          <a href="/">⌘Christian</a>
        </h2>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 760 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <a href="#about" onClick={handleMenu} className="h-about">
                {t("header.h-about")}
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={handleMenu} className="h-portfolio">
                {t("header.h-portfolio")}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleMenu} className="h-contact">
                {t("header.h-contact")}
              </a>
            </li>
          </ul>
          <Toggles />
        </nav>
        <div className={classes.header__content__menu}>
          {!menuOpen ? (
            <RiMenu5Fill onClick={handleMenu} />
          ) : (
            <RiCloseFill
              onClick={handleMenu}
              className={classes.header__close}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
