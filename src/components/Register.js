import { useState } from "react";

import '../../src/reset.css'
import './register.scss';

const Register = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <form className="wrapper__form">
                    <h4 className="wrapper__title">LocStar</h4>
                    <input 
                        className="wrapper__input firstname" 
                        type="text" 
                        placeholder="Full Name"/>
                    <input 
                        className="wrapper__input email" 
                        type="email" 
                        placeholder="Email"/>
                    <input 
                        className="wrapper__input password" 
                        type="password" 
                        placeholder="Password"/>
                    <button className="wrapper__btn">Create Account</button>
                    <p className="wrapper__text">By clicking “Create Account” you agree to our terms and privacy policy.</p>
                </form>
            </div>
        </div>
    )
}

export default Register