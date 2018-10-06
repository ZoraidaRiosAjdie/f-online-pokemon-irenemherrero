import React, { Component } from 'react';

class CharacterCard extends Component {

    render() {
        const { pokemonData } = this.props;
        return (
            <div>
                <div>
                    <img src={pokemonData.photo} alt={pokemonData.name} />
                    <div>
                        <p>ID / {pokemonData.id}</p>
                    </div>
                </div>
                <div>
                    <p>{pokemonData.name}</p>
                    <div>
                        {pokemonData.types.map((type, index) => {
                            return  <li key={index}>
                                        <p>{type}</p>
                                    </li>
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterCard;