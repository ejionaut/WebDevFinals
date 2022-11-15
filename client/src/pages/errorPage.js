import React from "react"
import "./styles/errorPage.css";
import logoW from "./styles/images/logo_white.png"

const ErrorPage = () => {
    return(
        <div className="ErrorPage">
            <img className ="studentLOGO" src={logoW} alt=""/>
            <main className="Center_Section">
                <h1>ERROR 404: Page not found</h1>
            </main>
        </div>
    );
};

export default ErrorPage;