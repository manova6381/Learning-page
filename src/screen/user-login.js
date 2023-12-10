import React, { useState } from "react";

import '../css/user-login.css';
const UserLoginPage = () =>{

    const [loginForm, updateLoginForm] = useState({
        emailField :"",
        passwordField :""
    })

    const getInputvalue = (event) =>{
        console.log(event.target.value);
        console.log(event.target.value, event.target.id);
        updateLoginForm({...loginForm, [event.target.id] : event.target.value});
    }

    const submitLogin = () =>{
        console.log(loginForm)
    }
    return(
        <div>
            <h3>User Login Page</h3>
            <div className="gmail">
                <label>Enter a Email id :</label>
                <input id="emailField" type="text" placeholder="@gmail.com" onChange={getInputvalue}></input>
            </div>
            <div className="password">
                <label>Enter a Password :</label>
                <input id="passwordField" type="password" placeholder="password" onChange={getInputvalue}></input>
            </div>
            <button onClick={submitLogin}>Login</button>
        </div>
    )
}

export default UserLoginPage;