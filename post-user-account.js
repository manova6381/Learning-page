import React, { useState } from "react";
import axios from "axios";


const PostUserAccountPage = () => {

    const [registerForm, updateRegiterForm] = useState({
        email : "",
        password : ""
    })

    const getValueFormInput = (event) =>{
        // updateRegiterForm(event.target.value);
        updateRegiterForm({...registerForm, [event.target.id] : event.target.value});
    }

    const submitRegister = () =>{
        // console.log(registerForm)

        const url = "https://reqres.in/api/register";

        axios.post(url, registerForm)

        .then((response) =>{
            console.log(response)
            alert("Success - User Registed");
        })
        .catch((error) =>{
            console.error(error);
            alert("Failed, Pls Conact Admin");
        })
    }

    return(
        <div>
            <h2>Post User Account</h2>
            <div>
                <label>Enter your Email ID : </label>
                <input id="email" type="text" placeholder="Enter a Email" onChange={getValueFormInput}></input>
            </div>
            <div>
                <label>Enter your password : </label>
                <input id="password" type="password" placeholder="Enter a Password" onChange={getValueFormInput}></input>
            </div>
            <button onClick={()=> submitRegister()}>post user</button>
        </div>
    )
}

export default PostUserAccountPage;