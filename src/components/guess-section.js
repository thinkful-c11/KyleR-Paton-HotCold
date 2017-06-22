import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm addGuess={props.addGuess} 
                       guesses={props.guesses}
                       guess={props.guess}
                       computer={props.computer}/>
        </section>

    );
}

