import React, { useState } from "react";
import {NavLink} from "react-router-dom"

const LoginScreen = () => {

    const [text, updateText] = useState("");

    const message = "This is a Message Variable"
    
    const displayMessage = () =>{
        alert("This is a Display Message")
    }
    const getValueFormInput = (event) =>{
        // console.log("Im working")
        console.log(event.target.value);

        updateText (event.target.value);
    }
    return(
        <div>
        <h1>This a Login Screen</h1>
        {/* <NavLink to="contact">Go to Contact page</NavLink> */}
        <br/>
            <NavLink to="/">Go to Loading Page</NavLink>
        <br/>
        <h2>{message}</h2>
        <input type="text" placeholder="Enter a Message" onChange={getValueFormInput} ></input>
        <br/>
        <h2>This is Using a <b>useState</b> Management Dynamic change text</h2>
        <h2>{text}</h2>
        <br/>
        <button onClick={() => displayMessage()}> Display Message</button>
        </div>
    )
}

export default LoginScreen;