import { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const timelineData = [
    {
      year: "2021",
      title: "Started Coding Journey in C++",
      description: "Wrote my first lines of Code as a Computer Science Student",
    },
    {
      year: "2022",
      title: "Started Learning Python",
      description: "Experimented things out using Python",
    },
    {
      year: "2023",
      title:
        "Learnt 'Java' and got interested towards the Object oriented and Structured way of the language",
      description:
        "Got my hands-on experience in java and learnt the theoretical and fundamental aspects of OOP",
    },
    {
      year: "2024",
      title: "Backend Development using Java",
      description:
        "Started exploring Backend developement of web applications using 'Java Spring Framework'",
    },
    {
      year: "2025",
      title: "Full stack Developemt",
      description:
        "Learnt and got hands-on experience on Full Stack web application development using MERN",
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
                I am Hari Prasath K, a passionate Full-Stack and Web3 Developer
                with a strong curiosity for emerging technologies such as AI/ML
                and Quantum Computing. I enjoy building meaningful digital
                experiences and exploring how cutting-edge systems can shape the
                future. My primary programming language is Java, and I
                constantly push myself to experiment, break things, learn, and
                improve through hands-on problem solving.
              </p>

              <p>
                Beyond development, I’m driven by the mindset of continuous
                learning. Whether it’s understanding blockchain fundamentals,
                experimenting with smart contract tools, or deepening my backend
                engineering skills, I take every project as a chance to upgrade
                myself. I believe in writing clean, maintainable code—and more
                importantly, understanding why something works rather than just
                how to implement it.
              </p>

              <p>
                I actively work on projects that challenge me to think
                critically, collaborate effectively, and innovate confidently.
                As I aim to grow into a well-rounded engineering professional,
                I’m building a portfolio that reflects my journey—one filled
                with curiosity, discipline, and a genuine love for technology.
                My goal is to create solutions that are not only functional but
                also future-ready.
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
