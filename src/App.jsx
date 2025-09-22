import React from "react";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";


import Project from "./pages/Projects";
import Home from "./pages/Home";

function App() {
  return (
    <Router basename="/Portfolio">
      <Routes>
         <Route path="/" element={<Home />} />  
        <Route path="/Projects" element={<Project />} />  
      </Routes>
    </Router>
  );
}

export default App;
