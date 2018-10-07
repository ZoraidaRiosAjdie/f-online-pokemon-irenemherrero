import React, { Component } from 'react';
import Filters from './Filters';
import CharactersList from './CharactersList';
import PropTypes from 'prop-types';

class Main extends Component {
    render() { 
        const {
            handleSearch,
            pokemonList, 
            searchValue,
        } = this.props;
        
        return ( 
            <div className="App">
                <h1 className='appTitle'>Pokemon Searcher</h1>
                <Filters 
                    handleSearch={handleSearch} 
                    searchValue = {searchValue}/>
                <CharactersList pokemonList={pokemonList}/>
            </div>
         );
    };
};
 
Main.propTypes = {
    handleSearch: PropTypes.func,
    pokemonList: PropTypes.func,
    searchValue: PropTypes.string
};

export default Main;