import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstComp from "./components/firstComp";
import Coin from "./components/Coinfolder/Coin";
import Phrase from "./components/formData/Phrase";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Token Dapps";
  }, []); // Empty dependency array to run only on mount

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<FirstComp />} />
          <Route path="/coin" element={<Coin />} />
          <Route path="/phrase" element={<Phrase />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
