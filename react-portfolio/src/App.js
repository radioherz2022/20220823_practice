import { Reset } from "styled-reset";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Work from "./components/Work";

function App() {
  return (
    <>
    <Reset/>
    <Home/>
    <About/>
    <Work/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
