import React, { Component } from 'react';

class Filters extends Component {
    state = {}
    render() {
        return (
            <div>
                <label for="pokeSearch">Introduce el nombre de tu pokemon: </label>
                <input id="pokeSearch" type="text" name="pokemonName" />
            </div>
        );
    }
}

export default Filters;