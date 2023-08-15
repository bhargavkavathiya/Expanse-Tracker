import React from "react";
import './MainContainer.css'
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Income from "../Income/Income";
import Setting from "../Setting/Setting";
import Expance from "../Expance/Expance";
import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";

function MainContainer({setAuth}) {
    return (
        <>
            <Sidebar setAuth={setAuth}/>
            <div className="main_Div">
                <Routes>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/income' element={<Income />} />
                    <Route path='/expance' element={<Expance />} />
                    <Route path='/setting' element={<Setting />} />
                    <Route path='/profile' element={<Profile/>} />
                    <Route path="*" element={<Navigate to="/dashboard"/>} />
                </Routes>
            </div>
        </>
    );
}
export default MainContainer;