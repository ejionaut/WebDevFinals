import React from "react";
import "./styles/index.css";
import logo from "./styles/images/logo_square.png";
import { useState } from "react";
import Axios from 'axios'
import {useNavigate} from "react-router-dom"

const LoginModule = () => {
    const [userId, setUserId] = useState("");
    const [passwordId, setPassword] = useState("");
    const [accountList, setAccountList] = useState([]);
    const navigate = useNavigate();

    const getAccounts = () => {
        Axios.get('http://localhost:3001/accounts').then((Response) => {
            setAccountList(Response.data)
            console.log(accountList)
    })
        accountCheck();
    }

    const accountCheck = () => {
        for (let i = 0; i <  accountList.length; i++) {
            if(accountList[i].user_id.toString() === userId && accountList[i].password === passwordId){
                if(userId >= 2000) {
                    navigate('/studentPage');
                } else {
                    navigate('/teacherPage');
                }
            } else if(accountList[i].user_id.toString() === userId && accountList[i].password !== passwordId) {
                errorHandling("WP")
            } else {
                errorHandling("NU")
            }
        }
    }

    return(
        <div className="Main_Container">
            <main className="Main_Section">
            <div id="error_message" className="error_message">
                <h1 id="error_message_text"> </h1>
            </div>
            <img className="login_logo" src={logo} alt="" />
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
                <button className="login_btn" onClick={getAccounts}> Login </button>
            </div>
        </main>
        </div>
    );
};

function errorHandling(error){
    let errorText = "<span>[Error]:</span>"
    if(error === "WP") {
        errorText += " Wrong Password."
    } else if (error === "NU") {
        errorText += " Not a valid account."
    } else {
        errorText += " Empty"
    }

    document.getElementById("error_message_text").innerHTML = errorText;
}

export default LoginModule;