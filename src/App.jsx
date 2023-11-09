import React, { Fragment } from "react";
import Bottom from "./component/Bottom";
import MainContent from "./component/MainContent";
import Topbar from "./component/Topbar";
import "./index.css"

const App = () =>{
    return(
        <Fragment>
        <Topbar/>
        <MainContent/>
        <Bottom/>
        </Fragment>
    )
}

export default App;
