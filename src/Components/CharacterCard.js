import React, { Component, Fragment } from 'react';
import '../Styles/CharacterCard.css';

class CharacterCard extends Component {

    render() {
        const { pokemonData } = this.props;
        return (
            <Fragment>
                <div className='imageIdContainer'>
                    <img src={pokemonData.photo} alt={pokemonData.name} />
                    <div className='idContainer'>
                        <p>ID / {pokemonData.id}</p>
                    </div>
                </div>
                <div className='nameTypeContainer'>
                    <p className='pokemonName'>{pokemonData.name}</p>
                    <div className='pokemonTypeList'>
                        {pokemonData.types.map((type, index) => {
                            return  <li key={index}>
                                        <p>{type}</p>
                                    </li>
                        })
                    }
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default CharacterCard;