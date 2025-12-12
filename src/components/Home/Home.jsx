import { useState, useEffect } from "react";
import profileImage from "../../assets/images/profile.jpg";
import resumeFile from "../../assets/resume/Hari_PrasathK_resume.pdf";
import "./Home.css";

const Home = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const fullText =
    "Hi, I'm Hari Prasath K 👨‍💻 | Full Stack Developer • Web3 Developer • Tech Explorer";

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 80);

      return () => clearTimeout(timeoutId);
    } else {
      setIsComplete(true);
    }
  }, [displayedText]);

  const handleDownloadResume = () => {
    // Open PDF in new tab for viewing with download option
    window.open(resumeFile, "_blank");
  };

  const handleViewProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behaviour: "smooth" });
  };

  const handleContactMe = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="home" id="home">
      <div className="home-container">
        
        <div className="profile-section">
          <div className="profile-image-wrapper">
            <img
              src={profileImage}
              alt="Hari Prasath K"
              className="profile-image"
            />
            <div className="profile-border"></div>
          </div>
        </div>

        <div className="intro-section">
          <h1 className="intro-text">
            {displayedText}
            {!isComplete && <span className="cursor">|</span>}
          </h1>
        </div>

        <div className="cta-section">
          <button className="cta-btn primary" onClick={handleDownloadResume}>
            <span className="btn-text">Download Resume</span>
            <span className="btn-icon">📄</span>
          </button>

          <button className="cta-btn secondary" onClick={handleViewProjects}>
            <span className="btn-text">View Projects</span>
            <span className="btn-icon">🚀</span>
          </button>

          <button className="cta-btn tertiary" onClick={handleContactMe}>
            <span className="btn-text">Contact Me</span>
            <span className="btn-icon">💬</span>
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Home;
