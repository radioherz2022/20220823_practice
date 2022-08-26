
import { Reset } from "styled-reset";
import Header from "./common/Header";
import SlideBtn from "./common/SlideBtn";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Work from "./components/Work";

function App() {


  return (
    <>
      <Reset/>
      <Header/>
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer/>
      <SlideBtn/>
    </>
  )
}


export default App;
