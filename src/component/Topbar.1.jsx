import React, { Fragment } from "react";

export const Topbar = () => {
    return (
        <Fragment>
            <div className="navbar">
                <ul>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl" target="_blank"> <li>Gmail</li> </a>
                    <a href="https://www.google.com/imghp?hl=en&tab=ri&ogbl"> <li>Images</li> </a>
                </ul>
            </div>
        </Fragment>
    );
};
