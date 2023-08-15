import React, { useEffect, useState } from "react";
import './SignUp.css';
import { Button, TextField } from "@material-ui/core";
import Axios from 'axios';
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
// import image from '../Assets/RegisterPage.jpg';

function SignUp({setAuth}) {
    const navigate = useNavigate();

    // useEffect(() => {
    //     const auth = localStorage.getItem('user');
    //     if (auth) {
    //         navigate('/products')
    //     } else {
    //     }
    // }, [])

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [ConfirmPassword, setConfirmPassword] = useState();

    const onsubmit = () => {
        Axios.post('http://localhost:5000/register', { name, email, password }).then((res) => {
                toast.success('Registered Successfully...', { theme: "colored" });
                localStorage.setItem('user', JSON.stringify(res.data));
                setAuth('true');
                navigate('/dashboard');
        }).then((err) => {
            console.log(err);
            setName('');
            setEmail('');
            setPassword('');
        });
    }
    // function Redirect(){
    //     navigate('/login');
    // }
    return (
        <>
            <div className="sign_ParentDiv">
                <div className="sign_mainDiv">
                    <div className="sign_Div">
                        <h2>Sign Up</h2>
                        <div className="sign_input">
                            <TextField placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} variant="outlined" label="Name" />
                        </div>
                        <div className="sign_input">
                            <TextField placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" label="Email" />
                        </div>
                        <div className="sign_input">
                            <TextField placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" variant="outlined" label="Password" />
                        </div>
                        <div className="sign_input">
                            <TextField placeholder="Confirm Password" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" variant="outlined" label="Confirm Password" />
                        </div>
                        <div className="sign_submit">
                            <Button variant="contained" type="submit" onClick={() => onsubmit()}>Sign Up</Button>
                        </div>
                        <div className="sign_DirectLogin">
                            <span>Already have an account?</span><Link to={'/login'}><strong>Login</strong></Link>
                        </div>
                    </div>
                    <div className="sign_Img">
                        {/* <img src={image} /> */}
                    </div>
                </div>
            </div>
        </>
    );
}
export default SignUp;