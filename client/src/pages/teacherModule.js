import React from "react"
import "./styles/teacherModule.css";
import logo from "./styles/images/logo_square.png";
import logoW from "./styles/images/logo_white.png"
import {useNavigate} from "react-router-dom"

const TeacherModule = () => {
    let navigate = useNavigate();

    return(
        <div className="teacher_container">
        <header className="Header_Section">
            <img className ="studentLOGO" src={logo} alt=""/>
                    <div className="header__greet">
                        <h1 className="greetingTXT"> Teacher Name, Hello! </h1>
                        <div className="header__buttons">
                            <button className="buttons">Options</button>
                            <button className="buttons" onClick={() => {navigate('/');}}>Log out</button>
                        </div>
                    </div>
                </header>
                <main className="Center_Section">
                    <div className="container_left">
                        <div className="display_quizes">
                            text
                        </div>
                    </div>
                    <div className="container_right">
                        <div className="teacher_module_button_container">
                            <button> Create Quiz </button>
                            <button> Quiz List </button>
                            <button> Student List </button>
                            <button> Remove </button>
                        </div>
                    </div>
                </main>
                <footer className="Footer_Section">
                    <img src={logoW} alt=""/>
                    <div>
                        <h3 className="group__mates">
                            Jun Roy Gahid
                        </h3>
                        <h3 className="group__mates">
                            Danielle Nicole Javier
                        </h3>
                        <h3 className="group__mates">
                            El Charis Laguitan
                        </h3>
                        <h3 className="group__mates">
                            Joanne Mangsat
                        </h3>
                        <h3 className="group__mates">
                            Eugene Justin Pangwi
                        </h3>
                        <h3 className="group__mates">
                            Francisco Miguel Villa
                        </h3>
                    </div>
                </footer>
            </div>
    )
};

export default TeacherModule;