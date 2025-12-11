import { useState, useEffect } from "react";
import './Experience.css'

const Experience = () => {
  
  const [isVisible, setIsVisible] = useState(false)
  const [subtitleText, setSubtitleText] = useState("")
  const [subtitleComplete, setSubtitleComplete] = useState(false)

  const fullSubtitle = "My professional journey and educational background"

  // Experience data
  const experienceData = [
    {
      id: 1,
      title: "Java Developer Intern",
      company: "Elevate Labs",
      location: "Remote",
      duration: "Jun 2025 – Jul 2025",
      type: "Internship",
      description: [
        "Developed CLI and GUI applications in Java using OOP, JDBC, and Swing for real-world use cases.",
        "Integrated MySQL database with CRUD operations and implemented input validation for data integrity.",
        "Collaborated using GitHub for version control, performing code reviews and merging pull requests.",
        "Improved execution efficiency by refactoring redundant code, reducing runtime by ∼20%."
      ],
      technologies: ["Java", "MySQL", "JDBC", "Swing", "GitHub"],
      featured: true
    },
    {
      id: 2,
      title: "Java Project Contributor",
      company: "Personal Project",
      location: "Remote",
      duration: "Oct 2024 – Nov 2024",
      type: "Project",
      description: [
        "Designed and implemented a Java Execution Tracker for runtime code tracing and debugging.",
        "Optimized logging mechanism and implemented variable state tracking for accurate reporting.",
        "Applied modular design principles and optimized data structures to enhance performance."
      ],
      technologies: ["Java", "OOP", "Data Structures", "Debugging"],
      featured: false
    }
  ]

  // Education data
  const educationData = [
    {
      id: 1,
      institution: "Amrita Vishwa Vidyapeetham",
      degree: "B.Tech in Computer Science and Engineering",
      location: "Coimbatore, India",
      duration: "Jul 2023 – Jul 2027",
      gpa: "8.99/10",
      description: "Currently pursuing Bachelor's degree with focus on software development, web technologies, and computer science fundamentals. Maintaining excellent academic performance with strong foundation in programming and system design.",
      specialization: "Software Development & Web Technologies",
      featured: true
    },
    {
      id: 2,
      institution: "Sri Lathangi Vidhya Mandir Hr Sec School",
      degree: "School Education (Grades 11 & 12)",
      location: "Tamil Nadu, India", 
      duration: "2021 – 2023",
      description: "Completed higher secondary education in Computer Science group from Tamil Nadu State Board. Built strong foundation in mathematics, science, and computer fundamentals with distinction.",
      specialization: "Computer Science Group",
      featured: false
    }
  ]

  // Certifications data
  const certificationsData = [
    {
      id: 1,
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM",
      year: "2025",
      description: "Developed a strong foundation in core AI concepts, model workflows, and practical applications, including hands-on exploration of IBM watsonX agents and real-world AI deployment scenarios.",
      skills: ["AI Concepts", "Watson AI", "Model Workflows", "AI Deployment"],
      certificateLink: "#", // Placeholder for actual link
      logo: "🤖"
    },
    {
      id: 2,
      title: "Oracle Cloud Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      description: "Completed foundational certification covering core cloud architecture, compute, storage, networking, and security essentials with practical experience in deploying and managing cloud resources.",
      skills: ["Cloud Architecture", "Oracle Cloud", "Security", "Networking"],
      certificateLink: "#", // Placeholder for actual link  
      logo: "☁️"
    },
    {
      id: 3,
      title: "Artificial Intelligence and Machine Learning",
      issuer: "Skillsoft",
      year: "2025", 
      description: "Gained introductory to intermediate knowledge of machine learning types, model evaluation, and real-world ML applications across industry use cases.",
      skills: ["Machine Learning", "Model Evaluation", "ML Applications", "Data Analysis"],
      certificateLink: "#", // Placeholder for actual link
      logo: "🧠"
    }
  ]

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const experienceSection = document.getElementById('experience')
    if (experienceSection) {
      observer.observe(experienceSection)
    }

    return () => observer.disconnect()
  }, [])

  // Typewriter effect for subtitle
  useEffect(() => {
    if (isVisible && subtitleText.length < fullSubtitle.length) {
      const timeoutId = setTimeout(() => {
        setSubtitleText(fullSubtitle.slice(0, subtitleText.length + 1))
      }, 50)
      
      return () => clearTimeout(timeoutId)
    } else if (subtitleText.length === fullSubtitle.length) {
      setSubtitleComplete(true)
    }
  }, [isVisible, subtitleText])

  return (
    <section className={`experience ${isVisible ? 'visible' : ''}`} id="experience">
      <div className="experience-container">
        {/* Section Header */}
        <div className="experience-header">
          <h2 className="experience-title">Experience & Education</h2>
          <div className="title-underline"></div>
          <p className="experience-subtitle">
            {subtitleText}
            {!subtitleComplete && <span className="subtitle-cursor">|</span>}
          </p>
        </div>

        {/* Main Timeline Section */}
        <div className="timeline-section">
          {/* Left Column - Experience */}
          <div className="timeline-column experience-column">
            <h3 className="column-title">
              <span className="title-icon">💼</span>
              Work Experience
            </h3>
            <div className="timeline">
              {experienceData.map((item, index) => (
                <div key={item.id} className={`timeline-item ${isVisible ? 'animate' : ''}`} 
                     style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content experience-card">
                    {item.featured && <div className="featured-badge">Featured</div>}
                    <div className="card-header">
                      <h4 className="position-title">{item.title}</h4>
                      <span className="company-name">{item.company}</span>
                      <div className="duration-location">
                        <span className="duration">{item.duration}</span>
                        <span className="location">{item.location}</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <ul className="achievements">
                        {item.description.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                      <div className="technologies">
                        {item.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Education */}
          <div className="timeline-column education-column">
            <h3 className="column-title">
              <span className="title-icon">🎓</span>
              Education
            </h3>
            <div className="timeline">
              {educationData.map((item, index) => (
                <div key={item.id} className={`timeline-item ${isVisible ? 'animate' : ''}`}
                     style={{ animationDelay: `${0.7 + index * 0.2}s` }}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content education-card">
                    {item.featured && <div className="featured-badge">Current</div>}
                    <div className="card-header">
                      <h4 className="degree-title">{item.degree}</h4>
                      <span className="institution-name">{item.institution}</span>
                      <div className="duration-location">
                        <span className="duration">{item.duration}</span>
                        <span className="location">{item.location}</span>
                      </div>
                      {item.gpa && (
                        <div className="gpa-highlight">
                          <span className="gpa-label">GPA:</span>
                          <span className="gpa-value">{item.gpa}</span>
                        </div>
                      )}
                    </div>
                    <div className="card-body">
                      <p className="education-description">{item.description}</p>
                      {item.specialization && (
                        <div className="specialization">
                          <span className="spec-label">Specialization:</span>
                          <span className="spec-value">{item.specialization}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="certifications-section">
          <h3 className="section-title">
            <span className="title-icon">🏆</span>
            Certifications
          </h3>
          <div className="certifications-grid">
            {certificationsData.map((cert, index) => (
              <div key={cert.id} className={`certification-card ${isVisible ? 'animate' : ''}`}
                   style={{ animationDelay: `${1.2 + index * 0.1}s` }}>
                <div className="cert-header">
                  <div className="cert-logo">{cert.logo}</div>
                  <div className="cert-info">
                    <h4 className="cert-title">{cert.title}</h4>
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                </div>
                <div className="cert-body">
                  <p className="cert-description">{cert.description}</p>
                  <div className="cert-skills">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="cert-footer">
                  <a href={cert.certificateLink} className="view-certificate-btn" 
                     target="_blank" rel="noopener noreferrer">
                    <span>View Certificate</span>
                    <span className="btn-icon">🔗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience