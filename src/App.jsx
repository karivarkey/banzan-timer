// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Timer from "./Timer";
import Congrats from "./Congrats";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/confetti" element={<Congrats />} />
      </Routes>
    </Router>
  );
};

export default App;
