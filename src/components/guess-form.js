import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component{

    validate(value) {
        console.log(this.props.guesses);
        if(Number(value) === NaN) {
            alert('Please only guess numbers.');
            return false;
        }

        if (value in this.props.guesses) {
            alert('Please guess unique numbers.');
            return false;
        }

        if (value > 100 || value < 0) {
            alert('Please guess numbers between 1-100.');
            return false;
        }
        return true;
    }

    render () {
        return (
            <form onSubmit={e => {e.preventDefault(); if (this.validate(this.input.value)) {this.props.addGuess(this.input.value)}}}>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" max="100" autoComplete="off"
                    placeholder="Enter your Guess" required ref={(input) => this.input = input}/>
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
            </form>
        );
    }
};

