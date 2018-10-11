import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Detail extends Component {
    render() {
        const { id } = this.props.match.params;
        const { pokemonList } = this.props;
        const pokemonToPrint = pokemonList[id - 1];
        const {
            abilities,
            evolutions,
            height,
            images,
            name,
            photo,
            types,
            weight,
        } = pokemonToPrint;

        return (
            <div className="pokemonDataContainer">
                <div className="pokemonCardDetail">
                    <div className="pokeNameContainer">
                        <h1 className="titlePokemon">{name}</h1>
                    </div>
                    <div className="photoAndDataContainer">
                        <div className="photoAndTypeContainer">
                            <div className="photoContainerDetail">
                                <img src={photo} alt={name} />
                            </div>
                            <div className="typeContainerDetail">
                                <ul className="listTypesDetails">
                                    {types.map(type => {
                                        return (
                                            <p className="typeDetails">{type}</p>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="allDataContainer">
                            <h2 className="dataTitleDetail">Characteristics</h2>
                            <ul className="listCharacteristicsDetails">
                                <li>
                                    <p className="characteristicTitle">Height:</p>
                                    <p>{height}</p>
                                </li>
                                <li>
                                    <p className="characteristicTitle">Weight:</p>
                                    <p className="characteristicData">{weight}</p>
                                </li>
                            </ul>
                            <h2 className="dataTitleDetail">Abilities</h2>
                            <ul className="listAbilitiesDetail">
                                {abilities.map(ability => {
                                    return (
                                        <p className="abilityDetail">{ability}</p>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="bigTitle">Evolutions</h2>
                        <ul className="listEvolutionsDetail">
                            {evolutions.map(evolution => {
                                return (
                                    <p className="evolutionDetail">{evolution}</p>
                                );
                            })}
                        </ul>
                    </div>
                    <div>
                        <h2 className="bigTitle">Images</h2>
                        <ul className="imagesContainerDetail">
                            {images.map(image => {
                                return (
                                    <img src={image} alt={name} />
                                );
                            })}
                        </ul>
                    </div>
                    <div className="containerButtonBackDetail">
                        <Link
                            className="linkToLanding"
                            to={'/'}
                        >
                            <button className="buttonBack">Back to PokeList</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;