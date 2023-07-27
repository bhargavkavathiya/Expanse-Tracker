import React from "react";
import './MainContainer.css'
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Income from "../Income/Income";
import Setting from "../Setting/Setting";
import Expance from "../Expance/Expance";

function MainContainer() {
    return (
        <>
            <div className="main_Div">
                <Routes>
                    <Route path='/' element={<Dashboard/>} />
                    <Route path='/income' element={<Income/>} />
                    <Route path='/expance' element={<Expance/>} />
                    <Route path='/setting' element={<Setting/>} />
                    <Route path='/profile' element={<h1>Profile</h1>} />
                </Routes>
            </div>
        </>
    );
}
export default MainContainer;