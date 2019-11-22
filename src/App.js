import React, { Component } from "react";
import ImgCard from "./components/ImgCard";
import simpsons from "./simpsons.json";
import "./style.css";

class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        simpsons
    };


    render() {
        return (
            <div className="row img-container">
                {this.state.simpsons.map(simpson => (
                    <ImgCard
                        id={simpson.id}
                        key={simpson.id}
                        name={simpson.name}
                        image={simpson.image}
                    />
                ))}
            </div>
        );
    }
}

export default App;
