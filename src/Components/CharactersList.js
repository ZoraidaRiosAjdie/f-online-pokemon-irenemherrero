import React, { Component } from 'react';
import CharacterCard from './CharacterCard.js';

class CharactersList extends Component {

    render() {
        const { pokemonList } = this.props;
        return (
            <div>
                <ul>
                    {
                        pokemonList.map((pokemonData) => {
                            return <li key={pokemonData.id}>
                                        <CharacterCard pokemonData={pokemonData} />
                                    </li>
                        })
                    }
                </ul>
            </div>

        );
    }
}

export default CharactersList;