import { useState, useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Programming Languages");
  const [isVisible, setIsVisible] = useState(false);
  const [subtitleText, setSubtitleText] = useState("");
  const [subtitleComplete, setSubtitleComplete] = useState(false);

  const fullSubtitle = "Technologies I work with to bring ideas to life !!";

  // Skills data structure - easily modifiable
  const skillsData = {
    "Programming Languages": [
      { name: "JavaScript", level: 90, icon: "🟨" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "TypeScript", level: 80, icon: "🔷" },
      { name: "Java", level: 75, icon: "☕" },
      { name: "C++", level: 70, icon: "⚡" },
    ],
    "Frontend Frameworks": [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "Vue.js", level: 75, icon: "💚" },
      { name: "HTML/CSS", level: 95, icon: "🌐" },
      { name: "Tailwind CSS", level: 80, icon: "🎨" },
    ],
    "Backend Frameworks": [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Express.js", level: 80, icon: "🚀" },
      { name: "Django", level: 70, icon: "🐍" },
      { name: "Flask", level: 65, icon: "🔥" },
      { name: "FastAPI", level: 60, icon: "⚡" },
    ],
    Tools: [
      { name: "Git & GitHub", level: 90, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Docker", level: 70, icon: "🐳" },
      { name: "Figma", level: 75, icon: "🎨" },
      { name: "Postman", level: 85, icon: "📮" },
    ],
    Databases: [
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "MySQL", level: 75, icon: "🐬" },
      { name: "PostgreSQL", level: 70, icon: "🐘" },
      { name: "Redis", level: 65, icon: "🔴" },
      { name: "Firebase", level: 75, icon: "🔥" },
    ],
  };

  const tabCategories = Object.keys(skillsData);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  // Subtitle typewriter animation - only when section is visible
  useEffect(() => {
    if (isVisible && subtitleText.length < fullSubtitle.length) {
      // Add a delay before starting the animation when section first becomes visible
      const startDelay = subtitleText.length === 0 ? 500 : 0;

      const timeoutId = setTimeout(() => {
        setSubtitleText(fullSubtitle.slice(0, subtitleText.length + 1));
      }, startDelay + 50); // 500ms delay when starting, then 50ms per character

      return () => clearTimeout(timeoutId);
    } else if (subtitleText.length === fullSubtitle.length) {
      setSubtitleComplete(true);
    }
  }, [isVisible, subtitleText, fullSubtitle]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className={`skills ${isVisible ? "visible" : ""}`} id="skills">
      <div className="skills-container">
        {/* Section Title */}
        <div className="skills-header">
          <h2 className="skills-title">Skills & Technologies</h2>
          <div className="title-underline"></div>
          <p className="skills-subtitle">
            {subtitleText}
            {!subtitleComplete && <span className="subtitle-cursor">|</span>}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="skills-tabs">
          {tabCategories.map((category) => (
            <button
              key={category}
              className={`tab-button ${activeTab === category ? "active" : ""}`}
              onClick={() => handleTabChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <div className="skills-content">
          <div className="skills-grid">
            {skillsData[activeTab].map((skill, index) => (
              <div
                key={skill.name}
                className={`skill-card ${isVisible ? "animate" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-header">
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>

                <div className="skill-progress-container">
                  <div
                    className="skill-progress-bar"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  ></div>
                </div>

                <div className="skill-level-text">
                  {skill.level >= 90
                    ? "Expert"
                    : skill.level >= 80
                    ? "Advanced"
                    : skill.level >= 70
                    ? "Intermediate"
                    : "Beginner"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="skills-stats">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Programming Languages</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Frameworks & Libraries</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Tools & Technologies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
