import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import PageNavbar from "./Components/Code-Editor/PageNavbar";
import Wrapper from "./Components/Wrapper/Wrapper";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Github from "./Pages/Github.jsx";
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import { activeIconSliceActions } from "./Redux/active-icon-slice";

function App() {
  let location = useLocation();
  const dispatch = useDispatch();

  let pathName = location.pathname.replace(/[^a-zA-Z0-9 ]/g, '');

  useMemo(() => {
    dispatch(activeIconSliceActions.setActiveIcon(pathName));
  }, [pathName, dispatch]);

  return (
    <Wrapper>
      <div className="font-mono">
        <Routes>
          <Route path="/about" element={ <About></About> } />
          <Route path="/contact" element={ <Contact></Contact> } />
          <Route path="/home" element={ <Home></Home> } />
          <Route path="/projects" element={ <Projects></Projects> } />
          <Route path="/github" element={ <Github></Github> } />
          <Route path="*" element={ <Navigate to="/home" replace /> } />
        </Routes>
      </div>
    </Wrapper>
  );
}

export default App;
