import React, { useState } from "react";
import axios from "axios";

const GetUserApi = () =>{

    const [getUserList, updateGetUserList] = useState([]);

    const loadUser = () =>{

        const url = "http://localhost:5000/api/user/list";

        axios.get(url)
        .then((response) => {
            console.log(response.UserList.name);
            updateGetUserList(response.UserList.name);
        })
        .catch((error) =>{
            console.error(error);
            alert("pls connect internet connection");
        })

    }
    return(
        <div>
            <h3>Get User Api</h3>
            <button onClick={()=>loadUser()}>Get User</button>
            <h2>{getUserList}</h2>
        </div>
    )
}

export default GetUserApi;