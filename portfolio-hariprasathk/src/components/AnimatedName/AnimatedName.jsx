import { useState, useEffect } from "react";
import "./AnimatedName.css";

const AnimatedName = () => {
  const names = ["Hari Prasath", "ஹரி பிரசாத்", "हरि प्रसाथ"];

  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentName = names[currentNameIndex];
    let timeoutId;

    if (isTyping) {
      // Typing effect
      if (displayedText.length < currentName.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentName.slice(0, displayedText.length + 1));
        }, 150); // Typing speed
      } else {
        // Finished typing, wait then start erasing
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 500); // Pause after typing
      }
    } else {
      // Erasing effect
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 100); // Erasing speed
      } else {
        // Finished erasing, move to next name
        setCurrentNameIndex((prev) => (prev + 1) % names.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentNameIndex, names]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="animated-name">
      <span className="typewriter-text">
        {displayedText}
        <span className={`cursor ${showCursor ? "visible" : "hidden"}`}>|</span>
      </span>
    </div>
  );
};

export default AnimatedName;
