import { useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import "./App.css";

function App() {
  useEffect(() => {
    // Create falling particles
    const createParticle = () => {
      const particle = document.createElement("div");
      const colors = ["purple", "pink", "blue"];
      const sizes = ["small", "medium", "large"];

      particle.className = `particle ${
        colors[Math.floor(Math.random() * colors.length)]
      } ${sizes[Math.floor(Math.random() * sizes.length)]}`;
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 2 + "s";

      const particlesContainer = document.querySelector(".particles");
      if (particlesContainer) {
        particlesContainer.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 5000);
      }
    };

    // Create particles continuously
    const intervalId = setInterval(createParticle, 300);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <div className="particles"></div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
