import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component { 
    constructor(props){
        super(props);
        this.state={
            computerNumber: 0,
            guesses: [],
            feedback: 'Make your guess!'
        };
    }

    render() {
        return (
        <div>
            <Header />
            <GuessSection feedback={this.state.feedback} 
                          addGuess={value => this.setState({guesses: [...this.state.guesses, value]})}
                          guesses={this.state.guesses}
            />
            <GuessCount count={this.state.guesses.length} />
            <GuessList guesses={this.state.guesses} />
        </div>
        );
    }    
}

