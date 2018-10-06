import React, { Component } from 'react';
import CharacterCard from './CharacterCard.js';
import '../Styles/CharactersList.css';

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

export default CharactersList;