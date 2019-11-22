import React, { Component } from "react";
import ImgCard from "./components/ImgCard";
import Nav from "./components/Nav"
import simpsons from "./simpsons.json";
import "./style.css";

class App extends Component {
    state = {
        simpsons,
        currentScore: 0,
        highScore: 0,
        clicked: []
    };

    reorder = () => {
        // const simpsons = this.state.simpsons
        // this.setState({ simpsons });
        this.setState({ simpsons: this.randomize(simpsons) });
        // this.randomize(simpsons);
    };

    //TODO: find a way to randomize the image
    randomize = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; //this is not a 2D array
        }
        return array;
    };

    componentDidMount() {
        this.setState({ simpsons: this.randomize(simpsons) });
    }

    render() {
        return (
            <Nav currentScore={this.state.currentScore} highScore={this.state.highScore}>
                <div>
                    <div className="jumbotron jumbotron-fluid text-center">
                        <div className="container">
                            <h1 className="display-1">Memory Game</h1>
                            <p className="lead">Only click on an image once or you lose!</p>
                        </div>
                    </div>
                    <div className="row img-container">
                        {this.state.simpsons.map(simpson => (
                            <ImgCard
                                reorder={this.reorder}
                                id={simpson.id}
                                key={simpson.id}
                                name={simpson.name}
                                image={simpson.image}
                            />
                        ))}
                    </div>
                </div>
            </Nav>
        );
    }
}

export default App;
