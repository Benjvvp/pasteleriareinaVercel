import "./App.css";
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HomePage, AboutPage, CakesPage, ContactPage } from "./Pages";
import { useEffect } from "react";

function usePageViews(){
  let location = useLocation();
  useEffect(() => {
    if(!window.GA_INITIALIZED){
      ReactGA.initialize('G-NFT2Q8TCSS');
      window.GA_INITIALIZED = true;
    }
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location])
}

function App() {
  usePageViews();
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
