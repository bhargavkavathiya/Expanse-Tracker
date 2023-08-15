import React, { useEffect } from "react";
import './Sidebar.css';
import { FaChartLine, FaMoneyBillWave } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';
import { AiFillSetting } from 'react-icons/ai';
import { BsCircleFill, BsPersonFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { VscSignOut } from 'react-icons/vsc';
import Pic from '../Assets/ProfileImg.png';

function Sidebar({setAuth}) {
    const navigate = useNavigate();
    const User=JSON.parse(localStorage.getItem('user'));
    
    function signOut(){
        localStorage.removeItem('user');
        setAuth('');
        navigate('/');
    }
    return (
        <>

            <div className="sb_mainDiv">

                <div className="sb_Profile">
                    <div className="sb_profileImg">
                        <img src={Pic} />
                    </div>
                    <div className="sb_ProfileInfo">
                        {console.log(User.name)}
                        <h4>{User.name}</h4>
                        <h5>Money</h5>
                    </div>
                </div>

                <ul className="sb_ul">
                    <li onClick={() => navigate('/dashboard')}><FaChartLine size={22} /><span>Dashboard</span></li>
                    <li onClick={() => navigate('/income')}><FaMoneyBillWave size={25} /><span >Income</span></li>
                    <li onClick={() => navigate('/expance')}><GiTakeMyMoney size={25} /><span >Expance</span></li>
                    <li onClick={() => navigate('/setting')}><AiFillSetting size={22} /><span >Setting</span></li>
                    <li onClick={() => navigate('/profile')}><BsPersonFill size={20} /><span >Profile</span></li>
                </ul>

                <div className="sb_Signout" onClick={()=>signOut()}>
                    <VscSignOut size={25}/><span>Sign Out</span>
                </div>
            </div>

        </>
    );
}
export default Sidebar;