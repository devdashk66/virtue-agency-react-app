import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Pages/Home/Nav/Nav";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Team from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Common_Components/Footer/Footer";
import Error from "./Pages/Error/Error";

import BackToTop from "react-custom-back-to-top-button";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <BackToTop />
    </>
  );
}

export default App;
