import React from "react";
import {NavLink} from "react-router-dom";

const HomeScreen = () => {
    return(
        <div>
            <h1>This is a HomePage</h1>
            {/* <NavLink to="login">Go to login page</NavLink> */}
            <br/>
            <NavLink to="/">Go to Loading Page</NavLink>
        </div>
    )
}

export default HomeScreen;