import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [subtitleText, setSubtitleText] = useState("");
  const [subtitleComplete, setSubtitleComplete] = useState(false);
  const [quoteText, setQuoteText] = useState("");
  const [quoteComplete, setQuoteComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const formRef = useRef();
  const fullSubtitle = "Let's Connect";
  const fullQuote = '"Alone we can do so little; together we can do so much."';
  const quoteAuthor = "— Helen Keller";

  // Contact information with icons
  const contactDetails = [
    {
      label: "Phone",
      value: "+91 6382072995",
      icon: "phone",
    },
    {
      label: "Email",
      value: "hariprasathkarunakaran06@gmail.com",
      icon: "email",
    },
    {
      label: "Location",
      value: "Coimbatore, Tamil Nadu",
      icon: "location",
    },
  ];

  // Social links - Data-driven for easy future additions
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/hariPrasathK-Dev",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/hariPrasathK-Dev",
      icon: "linkedin",
    },
    // Add more social links here easily:
    // {
    //   name: "Twitter",
    //   url: "https://twitter.com/username",
    //   icon: "twitter"
    // },
  ];

  // Icon component for rendering different types of icons
  const IconComponent = ({ type, className = "" }) => {
    const iconProps = {
      className: `contact-icon ${className}`,
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "currentColor",
    };

    switch (type) {
      case "phone":
        return (
          <svg {...iconProps}>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        );
      case "email":
        return (
          <svg {...iconProps}>
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        );
      case "location":
        return (
          <svg {...iconProps}>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        );
      case "github":
        return (
          <svg {...iconProps}>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg {...iconProps}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      case "twitter":
        return (
          <svg {...iconProps}>
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        );
      default:
        return null;
    }
  };

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

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => observer.disconnect();
  }, []);

  // Typewriter effect for subtitle
  useEffect(() => {
    if (isVisible && subtitleText.length < fullSubtitle.length) {
      const startDelay = subtitleText.length === 0 ? 500 : 0;

      const timeoutId = setTimeout(() => {
        setSubtitleText(fullSubtitle.slice(0, subtitleText.length + 1));
      }, startDelay + 50);

      return () => clearTimeout(timeoutId);
    } else if (subtitleText.length === fullSubtitle.length) {
      setSubtitleComplete(true);
    }
  }, [isVisible, subtitleText, fullSubtitle]);

  // Typewriter effect for quote (starts with subtitle)
  useEffect(() => {
    if (isVisible && quoteText.length < fullQuote.length) {
      const startDelay = quoteText.length === 0 ? 500 : 0;

      const timeoutId = setTimeout(() => {
        setQuoteText(fullQuote.slice(0, quoteText.length + 1));
      }, startDelay + 40);

      return () => clearTimeout(timeoutId);
    } else if (quoteText.length === fullQuote.length) {
      setQuoteComplete(true);
    }
  }, [isVisible, quoteText, fullQuote]);

  // ...existing validation and form handling code...
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus({
      loading: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        "service_fyeo9lm",
        "template_53q2djb",
        templateParams,
        "klpchXYcXxabLO6DE"
      );

      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message:
          "Failed to send message. Please try again or contact me directly.",
      });
    }
  };

  return (
    <section className={`contact ${isVisible ? "visible" : ""}`} id="contact">
      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="contact-subtitle">
            {subtitleText}
            {!subtitleComplete && <span className="subtitle-cursor">|</span>}
          </p>
        </div>

        {/* Main Contact Content */}
        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            {/* Inspiring Quote at Top */}
            <div className="contact-quote-section">
              <p className="contact-quote">
                {quoteText}
                {!quoteComplete && quoteText.length > 0 && (
                  <span className="quote-cursor">|</span>
                )}
              </p>
              {quoteComplete && <p className="quote-author">{quoteAuthor}</p>}
            </div>

            {/* All Contact Details with Icons - Data Driven */}
            <div className="contact-details-simple">
              {/* Contact Details with Icons */}
              {contactDetails.map((detail, index) => (
                <div key={index} className="contact-item-simple">
                  <div className="contact-item-with-icon">
                    <IconComponent type={detail.icon} />
                    <div className="contact-item-text">
                      <span className="contact-label">{detail.label}</span>
                      <span className="contact-value">{detail.value}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Links in Single Row - Data Driven */}
              <div className="contact-item-simple social-row">
                <div className="contact-item-with-icon">
                  <div className="social-icon-spacer"></div>
                  <div className="contact-item-text">
                    <span className="contact-label">Connect With Me</span>
                    <div className="social-links-simple">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link-simple"
                          title={social.name}
                        >
                          <IconComponent type={social.icon} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-section">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <h3 className="form-title">Send a Message</h3>

              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${formErrors.name ? "error" : ""}`}
                  placeholder="Your full name"
                />
                {formErrors.name && (
                  <span className="error-message">{formErrors.name}</span>
                )}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${formErrors.email ? "error" : ""}`}
                  placeholder="your.email@example.com"
                />
                {formErrors.email && (
                  <span className="error-message">{formErrors.email}</span>
                )}
              </div>

              {/* Subject Field */}
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`form-input ${formErrors.subject ? "error" : ""}`}
                  placeholder="What's this about?"
                />
                {formErrors.subject && (
                  <span className="error-message">{formErrors.subject}</span>
                )}
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`form-input form-textarea ${
                    formErrors.message ? "error" : ""
                  }`}
                  placeholder="Tell me about your project, idea, or just say hello!"
                  rows={6}
                />
                {formErrors.message && (
                  <span className="error-message">{formErrors.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`submit-btn ${formStatus.loading ? "loading" : ""}`}
                disabled={formStatus.loading}
              >
                {formStatus.loading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="send-icon">✈️</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {formStatus.success && (
                <div className="status-message success">
                  <span className="status-icon">✅</span>
                  {formStatus.message}
                </div>
              )}

              {formStatus.error && (
                <div className="status-message error">
                  <span className="status-icon">❌</span>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
