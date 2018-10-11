import React, { Component } from 'react';
import CharacterCard from './CharacterCard.js';
import PropTypes from 'prop-types';

class CharactersList extends Component {
    render() {
        const { pokemonList } = this.props;
        return (
            <div className="pokemonContainer">
                <ul className="pokemonList">
                    {
                        pokemonList().map((pokemonData) => {
                            return <li className="pokemonCard" key={pokemonData.id}>
                                <CharacterCard pokemonData={pokemonData} />
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    };
};

CharactersList.propTypes = {
    pokemonList: PropTypes.func,
};

export default CharactersList;