import React, { Component } from 'react';
import Header from './Header';
import Filters from './Filters';
import CharactersList from './CharactersList';
import Footer from './Footer';
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
                <Header/>
                <h1 className='appTitle'>Pokemon Searcher</h1>
                <Filters 
                    handleSearch={handleSearch} 
                    searchValue = {searchValue}/>
                <CharactersList 
                    pokemonList={pokemonList}
                    searchValue = {searchValue}/>
                <Footer/>
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