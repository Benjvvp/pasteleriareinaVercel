import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, AboutPage } from "./Pages";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/about" element={<AboutPage/>} />
        </Routes>
    </Router>
  );
}

export default App;
