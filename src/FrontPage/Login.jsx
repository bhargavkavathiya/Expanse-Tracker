import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import Axios from "axios";
import { toast } from "react-toastify";
function Login({ setAuth }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onsubmit = () => {
        Axios.post('http://localhost:5000/login', { email, password }).then((res) => {
            if (res.data) {
                console.log("RESSS", res);
                toast.success('Login Successfully...', { theme: "colored" });
                localStorage.setItem('user', JSON.stringify(res.data));
                setAuth('true');
                navigate('/dashboard');
            } else {
                setEmail('');
                setPassword('');
                toast.error('Wrong Credentials',{theme:"colored"});
            }
        }).then((err) => {
            console.log(err);
        });
    }
    return (
        <>
            <div className="log_ParentDiv">
                <div className="log_mainDiv">
                    <div className="log_Div">
                        <h1 id="log_wc">Welcome!</h1>
                        <h2>Login</h2>
                        <div className="log_input">
                            <TextField placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" label="Email" />
                        </div>
                        <div className="log_input">
                            <TextField placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" variant="outlined" label="Password" />
                        </div>
                        <div className="log_submit">
                            <Button variant="contained" type="submit" onClick={() => onsubmit()}>Login</Button>
                        </div>
                    </div>
                    <div className="log_Img">
                        {/* <img src={image} /> */}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;