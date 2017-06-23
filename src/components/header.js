import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: false
        }
    }

    render() {
        let modal;
        if (this.state.showing) {
            modal = <InfoModal 
                        hideModal={() => this.setState({showing: false})}
                    />;
        }
        
        return (
            <header>
                <TopNav 
                        newGame={this.props.newGame}
                        showModal={() => this.setState({showing: true})}
                    />
                {modal}
                <h1>HOT or COLD</h1>
            </header>
        );
    }
}
