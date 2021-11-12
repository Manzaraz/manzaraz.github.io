import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import ToggleLng from "./components/toggle/TogleLng";
import { ThemeContext } from "./helpers/context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#272527" : "#F3F3F0",
        color: darkMode ? "#F3F3F0" : "#272527",
        transition: "all 1.2s ease-in-out",
      }}
    >
      <ToggleLng />
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
