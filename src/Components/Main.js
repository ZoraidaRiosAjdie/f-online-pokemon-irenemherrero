import React, { Component } from 'react';
import Filters from './Filters';
import CharactersList from './CharactersList';

class Main extends Component {
    render() {
        return (
            <div className="App" >
                <h1 className='appTitle'>Pokemon Searcher</h1>
                <Filters handleSearch={this.handleSearch} />
                <CharactersList pokemonList={this.selectListToPrint} />
            </div>
        );
    }
}

export default Main;


