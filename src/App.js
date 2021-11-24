import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";

import { ThemeContext } from "./helpers/context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "rgb(0,0,0)" : "rgb(243, 242, 242)",
        color: darkMode ? "rgb(243, 242, 242)" : "#272527",
        transition: "all 1.2s ease-in-out",
      }}
    >
      <Intro />
      <Header />
      <About id="about" />
      {/* 
      <ProductList />
      <Contact /> */}
    </div>
  );
};

export default App;
