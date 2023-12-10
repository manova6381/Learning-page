import React from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () =>{
    return(
        <div>
            <h1>This is a Landing Page</h1>
            <NavLink to="/home">Go to Home Page</NavLink>
            <br/>
            <NavLink to="/login">Go to Login Page</NavLink>
            <br/>
            <NavLink to="/contact">Go to contact Page</NavLink>
            <br/>
            <NavLink to="/todo">Go to contact todo App Page</NavLink>
            <br/>
            <NavLink to="/user-login">Go to contact user login Page</NavLink>
            <br/>
            <NavLink to="/account">Go to contact Account Creation Page</NavLink>
            <br/>
            <NavLink to="/userprofile">Go to User profile Creation Page</NavLink>
            <br/>
            <NavLink to="/all">Go to All Get User Page</NavLink>
            <br/>
            <NavLink to="/post">Go to Post User Account</NavLink>
            <br/>
            <NavLink to="/product">Go to Get all Product</NavLink>
            <br/>
            <NavLink to="/node">Go to Get User Api</NavLink>
            <br/>
            <NavLink to="/crud">Go to Crud opertion</NavLink>
        </div>
    )
}

export default LandingPage;