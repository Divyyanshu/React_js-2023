import React from 'react'
import './BottomSection.css'
const BottomSection = () => {
  return (
    <div className="bottombar">
      <div className="b-onebar">
        India
      </div>
      <hr style={{color : 'grey'}} />
      <div className="b-onebar">
        <div className="b-left">
          <ul className="b-list">
            <li>About</li>
            <li>Advertising</li>
            <li>Bussiness</li>
            <li>How Search Work</li>
          </ul>
        </div>
        <div className="b-right">
        <ul className="b-list">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BottomSection;