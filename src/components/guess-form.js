import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component{    
    render () {
        return (
            <form onSubmit={e => {
                    e.preventDefault(); 
                    this.props.guess(this.input.value)
                    }}
            >
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" max="100" autoComplete="off"
                    placeholder="Enter your Guess" required ref={(input) => this.input = input}/>
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
            </form>
        );
    }
};

