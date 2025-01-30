"use client";
import { useRef, useState } from "react";
import styles from "./sidebar.module.css";
import TooltipPortal from "./TooltipPortal";

const Sidebar = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [activeIcon, setActiveIcon] = useState(null);

  const iconRefs = {
    music: useRef(null),
    game: useRef(null),
    motivate: useRef(null),
  };

  const handleIconClick = (icon) => {
    setActiveIcon(icon); // Keep only one icon pressed at a time
  };

  const tooltipTexts = {
    music: "Music Mood",
    game: "Game Space",
    motivate: "Motivation GPT",
  };

  return (
    <div className={styles.sidebar}>
      <span></span>
      <div className={styles.logo}>
        <img src="./logos/logo.png" alt="Logo" />
      </div>
      <div className={styles.iconContainer}>
        {Object.keys(iconRefs).map((icon) => (
          <div
            key={icon}
            ref={iconRefs[icon]}
            className={`${styles.icon} ${activeIcon === icon ? styles.active : ""}`}
            onMouseEnter={() => setActiveTooltip(icon)}
            onMouseLeave={() => setActiveTooltip(null)}
            onClick={() => handleIconClick(icon)}
          >
            <img src={`./logos/${icon}.png`} alt={icon} />
            {activeTooltip === icon && (
              <TooltipPortal text={tooltipTexts[icon]} parentRef={iconRefs[icon]} />
            )}
          </div>
        ))}
      </div>
      <div className={styles.profile}>
        <img src="./logos/user.png" alt="Profile" />
      </div>
    </div>
  );
};

export default Sidebar;
