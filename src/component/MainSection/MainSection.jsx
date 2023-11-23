import React from 'react';
import './MainSection.css'
import Google from '../../img/ggimg.png'

const MainSection = () => {
  return (
    <div className="main-section">
      <img src={Google} alt="" />
      {/* search bar design */}
      <div className="search-bar">
          <div className="search-left">
          <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="search-right">
          <i class="fa-solid fa-microphone"></i>
          <i class="fa-solid fa-square-virus"></i>
          </div>
        </div>
        {/* buttons */}
        <div className="m-buttons">
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </div>
      </div>
  )
}

export default MainSection;