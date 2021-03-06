import { useContext } from "react";

import classes from "./App.module.scss";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import ProductList from "../components/productList/ProductList";

import { ThemeContext } from "../helpers/context";
import Footer from "../components/footer/Footer";

const App = () => {
  const [{ theme }] = useContext(ThemeContext);

  return (
    <section
      className={classes.app}
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        transition: "all .5s ease-in-out",
      }}
    >
      <Intro />
      <Header />
      <About />
      <ProductList />
      <Contact />
      <Footer />
      {/*
       */}
    </section>
  );
};

export default App;
