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
            if(accountList[i].AccID.toString() === userId && accountList[i].Password === passwordId){
                if(userId >= 2000) {
                    console.log("Rigt")
                    navigate('/studentPage');
                } else {
                    console.log("false")
                    navigate('/teacherPage');
                }
            } else {
                console.log(accountList[i].Password)
                console.log("No student")
            }
        }
    }

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
                <button onClick={getAccounts}> Login </button>
            </div>
        </main>
    );
};

export default LoginModule;