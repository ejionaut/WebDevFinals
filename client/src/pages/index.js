import React from "react";
import "./styles/index.css";
import logo from "./styles/images/logo_square.png";
import { useState } from "react";

const LoginModule = () => {
    const [userId, setUserId] = useState("");
    const [passwordId, setPassword] = useState("");

    return(
        <main className="Main_Section">
            <div id="error_message" className="error_message">
                <h1 id="error_message_text">e</h1>
            </div>
            <img src={logo} alt="" />
            <div className="input_section">
                <div className="username_section">
                    <label className="username_label"> User ID: </label>
                    <input type="text" onChange={(event) => {
                        setUserId(event.target.value);
                    }}/>
                </div>
                <div className="password_section">
                    <label className="password_label"> Password: </label>
                    <input type="password" onChange={(event) => {
                        setPassword(event.target.value);
                    }}/>
                </div>
                <button onClick={errorChoice(userId, passwordId)}> Login </button>
            </div>
        </main>
    );
};

function errorChoice(userId, passwordId) {
    const codeID = "test";
    const passID = "test";

    if (userId.value === '' || userId.value == null && passwordId.value === '' || passwordId.value === null) {
        document.getElementById('error_message_text').innerHTML = "<span>ERROR:</span> The input is blank";
        document.getElementById('error_message').style.visibility = "visible";
    } else if (userId.value !== codeID.value && passID.value !== passwordId.value) {
        document.getElementById('error_message_text').innerHTML = "<span>ERROR:</span> The username and password does not match";
        document.getElementById('error_message').style.visibility = "visible";
    } else if (userId.value === codeID.value && passID === passwordId.value) {

    }
}

export default LoginModule;