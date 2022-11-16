import React from "react"
import "./styles/errorPage.css";
import logoW from "./styles/images/logo_white.png"

const ErrorPage = () => {
    return(
        <div className="ErrorPage">
            <main className="Center_Error_Section">
            <img className ="studentLOGO" src={logoW} alt=""/>
                <h1>ERROR 404: Page not found</h1>
            </main>
        </div>
    );
};

export default ErrorPage;