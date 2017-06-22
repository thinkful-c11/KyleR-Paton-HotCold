import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component { 
    constructor(props){
        super(props);
        this.state={
            computerNumber: Math.floor(Math.random()*100)+1,
            guesses: [],
            feedback: 'Make your guess!',
            currentGuess: null
        };
    }
    
    guess() {
        const computer = this.state.computerNumber;
        const value = Number(this.state.currentGuess);
        if(isNaN(value)) {
            alert('Please only guess numbers.');
            return false;
        }

        if (this.state.guesses.includes(value)) {
            alert('Please guess unique numbers.');
            return false;
        }

        if (value > 100 || value < 0) {
            alert('Please guess numbers between 1-100.');
            return false;
        }
        
        this.setState({guesses: [...this.state.guesses, value]})

        if(value === computer) {
            this.setState({
                feedback: 'You Won!'
            }); return;
        }

        if(Math.abs(computer-value) < 5) {
            this.setState({
                feedback: 'Hot!'
            }); return;
        }

        if(Math.abs(computer-value) < 15) {
            this.setState({
                feedback: 'Warm...'
            }); return;
        }
        this.setState({
            feedback: 'Cold!'
        })
    }

    newGame (){
        this.setState({
            computerNumber: Math.floor(Math.random()*100)+1,
            guesses: [],
            feedback: 'Make your guess!',
            currentGuess: null})
    }

    render() {
        return (
        <div>
            <Header newGame={() => this.newGame()}/>
            <GuessSection feedback={this.state.feedback} 
                          guess={() => this.guess()}
                          setCurrentGuess={value => this.setState({currentGuess: value})}
            />
            <GuessCount count={this.state.guesses.length} />
            <GuessList guesses={this.state.guesses} />
        </div>
        );
    }    
}

