import "./App.css";
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, CakesPage, ContactPage } from "./Pages";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGA.initialize('G-FBYW99B5G1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route exact path="/cakes" element={<CakesPage/>} />
          <Route exact path='/contact' element={<ContactPage/>} />
        </Routes>
    </Router>
  );
}

export default App;
