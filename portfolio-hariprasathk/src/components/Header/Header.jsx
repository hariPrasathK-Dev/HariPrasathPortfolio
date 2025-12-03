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
                <a href={`#${item.toLowerCase()}`} className="nav-link">
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
