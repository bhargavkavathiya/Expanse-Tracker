import React from "react";
import img from '../Assets/ProfileImg.png';
import './Profile.css';
function Profile() {
    return (
        <>
            <div className="pf_imgDiv">
                <img src={img} />
            </div>
        </>
    )
}
export default Profile;