import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [activePage, setActivePage] = useState("/");
  return (
    <div className="App">
      <Header setActivePage={setActivePage} />
      <main>
        {activePage === "/" && <Home />}
        {activePage === "/about" && <About />}
      </main>
    </div>
  );
}

export default App;
