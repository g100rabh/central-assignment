import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  const [activePage, setActivePage] = useState("/");
  return (
    <div className="App">
      <Header setActivePage={setActivePage} />
      <main>
        {activePage === "/" && <Home />}
        {activePage === "/about" && <About />}
        {activePage === "/experience" && <Experience />}
        {activePage === "/projects" && <Projects />}
      </main>
    </div>
  );
}

export default App;
