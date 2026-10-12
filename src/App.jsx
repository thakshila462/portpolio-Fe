import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

function App() {
  return (
      <>
        <Navbar />

        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
            <Services/>
          <Contact />
        </main>

        <Footer />
      </>
  );
}

export default App;