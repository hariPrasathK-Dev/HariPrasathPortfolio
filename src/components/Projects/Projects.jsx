import { useState, useEffect } from "react";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [subtitleText, setSubtitleText] = useState("");
  const [subtitleComplete, setSubtitleComplete] = useState(false);

  const fullSubtitle =
    "A collection of projects showcasing my development journey !!";

  // Projects data structure - easily modifiable
  const projectsData = [
    // Frontend Projects
    {
      id: 1,
      title: "E-Commerce Landing Page",
      description:
        "A modern, responsive e-commerce landing page with animated components and smooth user interactions.",
      category: "Frontend",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "CSS3", "JavaScript", "Responsive"],
      liveDemo: "#",
      sourceCode: "#",
      featured: false,
    },
    {
      id: 2,
      title: "Interactive Dashboard UI",
      description:
        "A sleek dashboard interface with charts, analytics, and real-time data visualization components.",
      category: "Frontend",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["React", "Chart.js", "Tailwind", "TypeScript"],
      liveDemo: "#",
      sourceCode: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Website Template",
      description:
        "A beautiful, animated portfolio template with modern design principles and smooth transitions.",
      category: "Frontend",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      liveDemo: "#",
      sourceCode: "#",
      featured: false,
    },

    // Backend Projects
    {
      id: 4,
      title: "REST API Server",
      description:
        "A scalable REST API with authentication, database integration, and comprehensive documentation.",
      category: "Backend",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      liveDemo: "#",
      sourceCode: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Real-time Chat Server",
      description:
        "A high-performance chat server with WebSocket support, rooms, and message history.",
      category: "Backend",
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      technologies: ["Node.js", "Socket.io", "Redis", "PostgreSQL"],
      liveDemo: "#",
      sourceCode: "#",
      featured: true,
    },
    {
      id: 6,
      title: "Microservices Architecture",
      description:
        "A distributed microservices system with API gateway, service discovery, and monitoring.",
      category: "Backend",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      technologies: ["Docker", "Kubernetes", "Node.js", "MongoDB"],
      liveDemo: "#",
      sourceCode: "#",
      featured: false,
    },

    // Full Stack Projects
    {
      id: 7,
      title: "Social Media Platform",
      description:
        "A complete social media application with posts, comments, real-time notifications, and user profiles.",
      category: "Full Stack",
      image:
        "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveDemo: "#",
      sourceCode: "#",
      featured: true,
    },
    {
      id: 8,
      title: "Task Management App",
      description:
        "A comprehensive project management tool with teams, deadlines, file sharing, and progress tracking.",
      category: "Full Stack",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Next.js", "Express", "PostgreSQL", "AWS"],
      liveDemo: "#",
      sourceCode: "#",
      featured: false,
    },
    {
      id: 9,
      title: "E-Learning Platform",
      description:
        "An online learning platform with video streaming, quizzes, progress tracking, and certificates.",
      category: "Full Stack",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MySQL", "Stripe"],
      liveDemo: "#",
      sourceCode: "#",
      featured: false,
    },
    {
      id: 10,
      title: "Crypto Trading Dashboard",
      description:
        "A real-time cryptocurrency trading platform with live charts, portfolio tracking, and trading history.",
      category: "Full Stack",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Express", "WebSocket", "MongoDB"],
      liveDemo: "#",
      sourceCode: "#",
      featured: true,
    },
  ];

  const filterCategories = ["All", "Frontend", "Backend", "Full Stack"];

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

    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      observer.observe(projectsSection);
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

  // Filter projects based on active filter
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === activeFilter)
      );
    }
  }, [activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className={`projects ${isVisible ? "visible" : ""}`} id="projects">
      <div className="projects-container">
        {/* Section Title */}
        <div className="projects-header">
          <h2 className="projects-title">My Projects</h2>
          <div className="title-underline"></div>
          <p className="projects-subtitle">
            {subtitleText}
            {!subtitleComplete && <span className="subtitle-cursor">|</span>}
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="filter-container">
          {filterCategories.map((filter) => (
            <button
              key={filter}
              className={`filter-button ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => handleFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${isVisible ? "animate" : ""} ${
                project.featured ? "featured" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-hover-text">
                    <span>View Project</span>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo-link"
                  >
                    <span className="link-icon">👁️</span>
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link code-link"
                  >
                    <span className="link-icon">💻</span>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Stats */}
        <div className="projects-stats">
          <div className="stat-item">
            <span className="stat-number">{projectsData.length}+</span>
            <span className="stat-label">Total Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {projectsData.filter((p) => p.category === "Full Stack").length}+
            </span>
            <span className="stat-label">Full Stack Apps</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {projectsData.filter((p) => p.featured).length}+
            </span>
            <span className="stat-label">Featured Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
