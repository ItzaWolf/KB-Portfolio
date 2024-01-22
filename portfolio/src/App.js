import React from "react";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
