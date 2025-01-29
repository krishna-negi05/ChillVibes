// TooltipPortal.js
"use client";
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './sidebar.module.css';

const TooltipPortal = ({ text, parentRef }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (parentRef.current) {
      const updatePosition = () => {
        const rect = parentRef.current.getBoundingClientRect();
        setPosition({
          top: rect.top + rect.height / 2,
          left: rect.right + 15
        });
      };

      updatePosition();
      window.addEventListener('resize', updatePosition);
      return () => window.removeEventListener('resize', updatePosition);
    }
  }, [parentRef]);

  return ReactDOM.createPortal(
    <div 
      className={styles.tooltipPortal}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      {text}
    </div>,
    document.body
  );
};

export default TooltipPortal;