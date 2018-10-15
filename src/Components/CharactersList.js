import React, { Component } from 'react';
import CharacterCard from './CharacterCard.js';
import NoPokemon from './NoPokemon.js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CharactersList extends Component {
    
    render() {
        const { pokemonList, searchValue } = this.props;
        return pokemonList().length > 0
            ? <div className="pokemonContainer">
                <ul className="pokemonList">
                    {
                        pokemonList().map((pokemonData) => {
                            return( 
                            <Link 
                                className="linkToDetail" 
                                to={`/pokemon/${pokemonData.id}`}
                            >
                                <li className="pokemonCard" key={pokemonData.id}>
                                <CharacterCard pokemonData={pokemonData} />
                                </li>
                            </Link>
                            );
                        })
                    }
                </ul>
            </div>
        : <NoPokemon searchValue = {searchValue}/>
    };
};

CharactersList.propTypes = {
    pokemonList: PropTypes.func,
};

export default CharactersList;