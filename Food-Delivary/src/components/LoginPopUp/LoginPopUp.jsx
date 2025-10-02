import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets'
const LoginPopUp = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("login")
    return (
        <div className='login-popup'>
            <form action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input type='text' placeholder='your name' required />}
                    <input type='email' placeholder='your email' required />
                    <input type='password' placeholder='your Password' required />
                </div>
                <button>{currState === "signup" ? "create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing,i agree to the terms of use & privacy policy</p>
                </div>
                {currState === "Login" ? <p>create a new account? <span onClick={() => setCurrState("sign up")}>click here</span> </p> : <p>Already have an account? <span onClick={() => setCurrState("Login")}>click here</span></p>
                }

            </form>
        </div>
    )
}

export default LoginPopUp