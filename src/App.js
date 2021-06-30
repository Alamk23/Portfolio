import React from "react";
import {
  Home,
  About,
  Services,
  Projects,
  Myblog,
  Contact,
  Footer,
  Navbar,
} from "./Screens";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Myblog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
