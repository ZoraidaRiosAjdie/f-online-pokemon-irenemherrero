import React, { Component } from 'react';

class Filters extends Component {
    render() {
        const{handleSearch} = this.props;
        return (
            <div>
                <label htmlFor="pokeSearch">Introduce el nombre de tu pokemon: </label>
                <input id="pokeSearch" type="text" name="pokemonName" onChange={handleSearch}/>
            </div>
        );
    }
}

export default Filters;