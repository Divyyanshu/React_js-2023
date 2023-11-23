import React from 'react'
import './Offerdlink.css'

const Offerdlink = () => {
  return (
    <div className="offerlinks">
        <span style={{fontWeight : '100' ,color : '#7D7C7C',fontSize:"14px" }}>Googles offerd In :</span>
        <ul className="o-links">
         <a href=""><li>Hindi</li></a>
         <a href=""><li>English</li></a>
         <a href=""><li>Marathi</li></a>
         <a href=""><li>Punjabi</li></a>
         <a href=""><li>Haryanvi</li></a>
         <a href=""><li>Urdu</li></a>
         <a href=""><li>Portugal</li></a>
        </ul>
    </div>
  )
}

export default Offerdlink;