import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Wrapper from "./Components/Wrapper/Wrapper";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Github from "./Pages/Github.jsx";
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";

function App() {

  return (
    <Wrapper>
      <Routes>
        <Route path="/about" element={ <About></About> } />
        <Route path="/contact" element={ <Contact></Contact> } />
        <Route path="/home" element={ <Home></Home> } />
        <Route path="/projects" element={ <Projects></Projects> } />
        <Route path="/github" element={ <Github></Github> } />
        <Route path="*" element={ <Navigate to="/home" /> } />
      </Routes>
    </Wrapper>
  );
}

export default App;
