import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
function FrontPage({setAuth}){
    return(
        <>
                <Routes>
                    <Route path="/" element={<SignUp setAuth={setAuth}/>}/>
                    <Route path="/login" element={<Login setAuth={setAuth}/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
        </>
    )
}
export default FrontPage;