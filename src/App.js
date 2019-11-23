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
    };

    handleImgClick = id => {
        if (this.state.clicked.includes(id)) {
            alert("You Lost!");
            this.resetGame();
        } else {
            this.setState(prevState => ({
                clicked: [...prevState.clicked, id],
                currentScore: this.state.currentScore + 1,
                simpsons: this.randomize(simpsons)
            }), () => {
                this.checkAndUpdateScore();
                this.handleWin();
            });
        }
    };

    resetGame() {
        this.setState({
            simpsons: this.randomize(simpsons),
            clicked: [],
            currentScore: 0
        });
    };

    checkAndUpdateScore() {
        if(this.state.clicked.length > this.state.highScore) {
            this.setState({ highScore: this.state.clicked.length });
        }
    }

    handleWin() {
        if (this.state.currentScore === this.state.simpsons.length){
            alert("You Won!!!");
            this.resetGame();
        }
    };

    render() {
        const { currentScore, highScore } = this.state;
        return (
            < Nav currentScore={currentScore} highScore={highScore} >
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
                                handleImgClick={this.handleImgClick}
                            />
                        ))}
                    </div>
                </div>
            </Nav >
        );
    }
}

export default App;
