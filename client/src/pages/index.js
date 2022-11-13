import React from "react"
import "./styles/index.css"
import logo from "./styles/images/logo_square.png"

const loginModule = () => {
    return(
        <main className="Main_Section">
            <img src={logo} alt="" />
            <div className="input_section">
                <div className="username_section">
                    <label className="username_label"> User ID: </label>
                    <input type="text"/>
                </div>
                <div className="password_section">
                    <label className="password_label"> Password: </label>
                    <input type="password" />
                </div>
                <button> Login </button>
            </div>
        </main>
    );
};

export default loginModule;