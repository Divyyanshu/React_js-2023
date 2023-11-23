import React from "react";
import Navbar from "./component/Navbar/Navbar";
import BottomSection from "./component/BottomSection/BottomSection";
import MainSection from "./component/MainSection/MainSection";


const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <MainSection/>
        <BottomSection/>
    </div>
  )
}

export default App