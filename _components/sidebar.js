// components/Sidebar.js
import React from 'react';
import { FaBook, FaSearch, FaUser, FaPlug, FaGlobe, FaUsers, FaClipboardList, FaCog, FaPen, FaShieldAlt } from 'react-icons/fa';
import styles from './sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <span></span>
      <div className={styles.logo}><img src="./logos/logo.png"/></div>
      <div className={styles.icon}><img src="./logos/music.png"/></div>
      <div className={styles.icon}><FaSearch /></div>
      <div className={`${styles.icon} ${styles.active}`}>K</div>
      <div className={styles.icon}><FaPlug /></div>
      <div className={styles.icon}><FaGlobe /></div>
      <div className={styles.icon}><FaUsers /></div>
      <div className={styles.icon}><FaClipboardList /></div>
      <div className={styles.icon}><FaShieldAlt /></div>
      <div className={styles.icon}><FaCog /></div>
      <div className={styles.icon}><FaPen /></div>
      <div className={styles.profile}><img src="/path/to/your/image.jpg" alt="Profile" /></div>
    </div>
  );
};

export default Sidebar;