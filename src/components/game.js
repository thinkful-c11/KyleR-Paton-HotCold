import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component { 
    constructor(props){
        super(props);
        this.state={
            computerNumber: 50,
            guesses: [],
            feedback: 'Make your guess!'
        };
    }
    
    guess(value) {
        console.log(this);
        const computer = this.computer;
        console.log("working?")
        value = Number(value);
        if(isNaN(value)) {
            alert('Please only guess numbers.');
            return false;
        }

        if (this.guesses.includes(value)) {
            alert('Please guess unique numbers.');
            return false;
        }

        if (value > 100 || value < 0) {
            alert('Please guess numbers between 1-100.');
            return false;
        }

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

    render() {
        return (
        <div>
            <Header />
            <GuessSection feedback={this.state.feedback} 
                          addGuess={value => this.setState({guesses: [...this.state.guesses, value]})}
                          guesses={this.state.guesses}
                          guess={this.guess}
                          computer={this.state.computerNumber}
            />
            <GuessCount count={this.state.guesses.length} />
            <GuessList guesses={this.state.guesses} />
        </div>
        );
    }    
}

