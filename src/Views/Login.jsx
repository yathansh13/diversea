import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import leftImg from "../Assets/ll.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./Login.css";

const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/")
        } catch (err) {
            setErr(true);
        }
    };
    return (
        <div className="formMain">
            <div className="formImg">


                
        <img className="limg" src={leftImg} alt="" />
            </div>
            <div className="formWrap">
                <span className="logo">diver<span className="logo-sea">sea</span></span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>

                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="password" />
                    <button>Sign in</button>
                    {err && <span>Try Again</span>}
                </form>
                <p>You don't have an account? <Link to="/register">Register</Link></p>
                <hr className="line" />
            </div>
        </div>
    );
};

export default Login;
