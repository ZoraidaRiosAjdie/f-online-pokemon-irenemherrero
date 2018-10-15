import React, { Component } from 'react';
import pikachuCatch from '../images/pikachu_catch.gif';

class NoPokemon extends Component {
    render() { 
        return ( 
            <div className="noPokemonContainer">
                <img className="catchPokemon" src={pikachuCatch} alt="No pokemon to show"/>
                <h1 className="noPokemonMessage">You don't have a pokemon named {this.props.searchValue}...</h1>
                <h2 className="noPokemonMessage2">Catch it!</h2>
            </div>
         );
    }
}
 
export default NoPokemon;