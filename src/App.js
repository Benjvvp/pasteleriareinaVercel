import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, CakesPage, ContactPage } from "./Pages";

function App() {
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
