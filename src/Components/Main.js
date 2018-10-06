import React, { Component } from 'react';
import Filters from './Filters';
import CharactersList from './CharactersList';

class Main extends Component {
    render() { 
        const {
            handleSearch,
            pokemonList
        } = this.props;
        return ( 
            <div className = "App" >
                <h1 className='appTitle'>Pokemon Searcher</h1>
                <Filters handleSearch={handleSearch} />
                <CharactersList pokemonList={pokemonList} />
            </div>
         );
    }
}
 
export default Main;