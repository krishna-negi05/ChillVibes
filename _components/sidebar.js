// Sidebar.jsx
"use client"
import { useRef, useState } from 'react';
import styles from './sidebar.module.css';
import TooltipPortal from './TooltipPortal';

const Sidebar = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const iconRefs = {
    music: useRef(null),
    game: useRef(null),
    motivate: useRef(null)
  };

  return (
    <div className={styles.sidebar}>
      <span></span>
      <div className={styles.logo}>
        <img src="./logos/logo.png" alt="Logo" />
      </div>
      <div className={styles.iconContainer}>
        <div 
          ref={iconRefs.music}
          className={styles.icon}
          onMouseEnter={() => setActiveTooltip('music')}
          onMouseLeave={() => setActiveTooltip(null)}
        >
          <img src="./logos/music.png" alt="Music" />
          {activeTooltip === 'music' && (
            <TooltipPortal text="Music Mood" parentRef={iconRefs.music} />
          )}
        </div>
        <div 
          ref={iconRefs.game}
          className={styles.icon}
          onMouseEnter={() => setActiveTooltip('game')}
          onMouseLeave={() => setActiveTooltip(null)}
        >
          <img src="./logos/game.png" alt="Games" />
          {activeTooltip === 'game' && (
            <TooltipPortal text="Game Space" parentRef={iconRefs.game} />
          )}
        </div>
        <div 
          ref={iconRefs.motivate}
          className={styles.icon}
          onMouseEnter={() => setActiveTooltip('motivate')}
          onMouseLeave={() => setActiveTooltip(null)}
        >
          <img src="./logos/motivate.png" alt="Motivation" />
          {activeTooltip === 'motivate' && (
            <TooltipPortal text="Motivation GPT" parentRef={iconRefs.motivate} />
          )}
        </div>
      </div>
      <div className={styles.profile}>
        <img src="./logos/user.png" alt="Profile" />
      </div>
    </div>
  );
};

export default Sidebar;