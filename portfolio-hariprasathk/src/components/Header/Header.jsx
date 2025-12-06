import AnimatedName from "../AnimatedName/AnimatedName";
import "./Header.css";

const Header = () => {
  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.toLowerCase());
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <AnimatedName />
        </div>

        <nav className="navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item} className="nav-item">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
                  onClick={(e) => handleSmoothScroll(e, item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
