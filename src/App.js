import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import HomeScreen from "./screen/home-page";
import LoginScreen from "./screen/login-page";
import ContactPage from "./screen/contact-page"; 
import LandingPage from "./screen/landing-page";
import TodoAppPage from "./screen/todo-app-page";
import UserLoginPage from "./screen/user-login";
import AccountCreationPage from "./screen/account-creation";
import ListUserProfile from "./screen/user-profile";
import GetAllUser from "./screen/get-all-user";
import PostUserAccountPage from "./screen/post-user-account";
import GetAllProduct from "./screen/get-all-products";
import GetUserApi from "./screen/get-user-Api";
import CrudOperation from "./screen/crud-operation";

function App(){
  return(
    <div>
      {/* <h1>Hi Hello!!!!!! Everyone.....</h1> */}
      <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingPage></LandingPage>}></Route>
        <Route path="home" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="todo" element={<TodoAppPage></TodoAppPage>}></Route>        
        <Route path="user-login" element={<UserLoginPage></UserLoginPage>}></Route>
        <Route path="account" element={<AccountCreationPage></AccountCreationPage>}></Route>
        <Route path="userprofile" element={<ListUserProfile></ListUserProfile>}></Route>
        <Route path="all" element={<GetAllUser></GetAllUser>}></Route>
        <Route path="post" element={<PostUserAccountPage></PostUserAccountPage>}></Route>
        <Route path="product" element={<GetAllProduct></GetAllProduct>}></Route>
        <Route path="node" element={<GetUserApi></GetUserApi>}></Route>
        <Route path="crud" element={<CrudOperation></CrudOperation>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;