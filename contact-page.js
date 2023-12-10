import React from "react";
import {NavLink} from "react-router-dom";

const ContactPage = () => {
    return(
        <div>
            <h1>This a Contact page</h1>
            {/* <NavLink to="home">Go to home page</NavLink> */}
            <br/>
            <NavLink to="/">Go to Loading Page</NavLink>
        </div>
    )
}

export default ContactPage;