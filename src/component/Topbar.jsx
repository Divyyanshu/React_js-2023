import React, { Fragment } from "react";

const Topbar = ()=>{
return (
    <Fragment>
   <div className="navbar">
   <ul className="nav-top-bar">
   <li><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl">Gmail</a></li>
   <li><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl">Images</a></li>
   <i class="fa-solid fa-sliders"></i>
   <i class="fa-solid fa-flask"></i>
   </ul>
   </div>
    </Fragment>
)
}

export default Topbar;