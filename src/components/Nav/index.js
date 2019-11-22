import React from "react";

function Nav(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand">Clicky-Game</span>
                <div className="container collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-brand">
                            <span>You guessed {props.status}!</span>
                        </li>
                    </ul>
                    <span className="navbar-brand">
                        Current Score: {props.currentScore} | High Score: {props.highScore}
                    </span>
                </div>
            </nav>
            {props.children}
        </div>
    );
}

export default Nav;
