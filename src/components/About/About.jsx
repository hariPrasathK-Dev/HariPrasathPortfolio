import { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const timelineData = [
    {
      year: "2021",
      title: "Started Coding Journey",
      description:
        "Wrote my first lines of HTML and fell in love with web development",
    },
    {
      year: "2022",
      title: "First Professional Project",
      description: "Developed and deployed my first full-stack application",
    },
    {
      year: "2023",
      title: "Expanded Tech Stack",
      description: "Mastered React and began exploring backend technologies",
    },
    {
      year: "2024",
      title: "Full Stack Development",
      description:
        "Building complete solutions and mentoring junior developers",
    },
  ];

  const valueCards = [
    {
      icon: "🧩",
      title: "Problem Solving",
      description:
        "I enjoy tackling complex challenges and finding efficient solutions",
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      description: "Always exploring new technologies and improving my skills",
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "Working effectively with others to create amazing products",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`about ${isVisible ? "visible" : ""}`} id="about">
      <div className="about-container">
        {/* Section Title */}
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        {/* Main Content - Two Columns */}
        <div className="about-content">
          {/* Left column */}
          <div className="bio-section">
            <h3 className="bio-title">Who is Hari Prasath?</h3>
            <div className="bio-text">
              <p>
                I am Hari Prasath, a dedicated and enthusiastic Full Stack
                Developer with a strong drive to engineer scalable, robust, and
                intuitive digital solutions. My journey into the world of
                technology began with an early curiosity about how software
                powers modern life, evolving into a deep passion for building
                applications that make a meaningful impact.
              </p>
              <p>
                I possess hands-on experience in both frontend and backend
                development, with a solid command of modern frameworks and tools
                such as React, Next.js, Node.js, Express, and MongoDB. I thrive
                on crafting seamless user interfaces while ensuring efficient,
                secure, and scalable backend architectures. My focus lies in
                delivering clean, maintainable code and user-centric designs,
                with an emphasis on performance and responsiveness.
              </p>
              <p>
                Outside of development, I enjoy diving into tech research,
                exploring AI and system design, writing technical blogs,
                mentoring aspiring developers, and contributing to developer
                communities. I believe that great software is a blend of
                creativity, logic, and empathy—and I aim to bring all three into
                everything I build.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="journey-section">
            <h3 className="journey-title">My Journey</h3>

            <div className="timeline">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item ${isVisible ? "animate" : ""}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-descriptor">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - view Cards */}
        <div className="values-section">
          <div className="values-grid">
            {valueCards.map((card, index) => (
              <div
                key={index}
                className={`value-card ${isVisible ? "animate" : ""}`}
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="card-icon"> {card.icon}</div>
                <h4 className="card-title">{card.title}</h4>
                <p className="card-description">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
