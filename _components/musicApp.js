"use client"
import React, { useState } from 'react';
import { Search, Music2, Heart } from 'lucide-react';
import './musicplayer.css';

const MusicApp = () => {
  const [currentMood, setCurrentMood] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const moods = [
    { id: 'happy', label: 'Happy' },
    { id: 'sad', label: 'Sad' },
    { id: 'romantic', label: 'Romantic' },
    { id: 'party', label: 'Party' },
    { id: 'devotional', label: 'Devotional' },
    { id: 'chill', label: 'Relaxed' },
  ];

  const languages = [
    { id: 'all', label: 'All' },
    { id: 'hindi', label: 'Hindi' },
    { id: 'punjabi', label: 'Punjabi' },
    { id: 'english', label: 'English' },
  ];

  return (
    <div className="music-container">
      {/* Search Section */}
      <div className="search-wrapper">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search for songs, artists, or albums..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Mood Selection */}
      <div className="mood-section">
        <h2 className="section-title">Choose Your Mood</h2>
        <div className="mood-grid">
          {moods.map((mood) => (
            <button
              key={mood.id}
              className={`mood-button ${mood.id} ${currentMood === mood.id ? 'selected' : ''}`}
              onClick={() => setCurrentMood(mood.id)}
            >
              {mood.label}
            </button>
          ))}
        </div>
      </div>

      {/* Language Filter */}
      <div className="language-section">
        <h2 className="section-title">Select Language</h2>
        <div className="language-container">
          {languages.map((lang) => (
            <button
              key={lang.id}
              className={`language-button ${currentLanguage === lang.id ? 'selected' : ''}`}
              onClick={() => setCurrentLanguage(lang.id)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Current Playing Section */}
      <div className="player-card">
        <div className="player-content">
          <div className="album-art">
            <Music2 className="w-8 h-8 text-white" />
          </div>
          <div className="song-info">
            <h3 className="song-title">Currently Playing</h3>
          </div>
          <button className="heart-button">
            <Heart className="w-6 h-6" />
          </button>
        </div>
      </div>
      </div>
    
  );
};

export default MusicApp;