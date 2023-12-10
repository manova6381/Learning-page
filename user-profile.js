import React, { useState } from "react";
import axios from "axios";

const ListUserProfile = () =>{

    const [profileList, updateProfileList] = useState([]);

    const loadUser = () =>{

        const url = "https://reqres.in/api/users?page=2";

        axios.get(url)
        .then((response) =>{
            updateProfileList(response.data.data);
        })
        .catch((error) =>{
            console.error(error);
            alert("please conact your admin");
        })
    }

    let userProfileMap = profileList.map((value, index) => {
        return(
            <tr key={index}>
                <td>{value.id}</td>
                <td>{value.first_name}</td>
                <td>{value.last_name}</td>
                <td>{value.email}</td>
                <td>
                    <img src={value.avatar} width="30" alt="" ></img>
                </td>
            </tr>
        )
    })
    
    return(
        <div>
            <h1>List User Profile</h1>
            <button onClick={()=>loadUser()} >user profile</button>
            <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {userProfileMap}
        </tbody>
      </table>
        </div>
    )
}

export default ListUserProfile;