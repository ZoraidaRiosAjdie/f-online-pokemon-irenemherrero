import React, { Component } from 'react';

class Filters extends Component {
    render() {
        const {
            handleSearch,
            searchValue,
        } = this.props;

        return (
            <div>
                <label htmlFor="pokeSearch" />
                <input
                    id="pokeSearch"
                    type="text"
                    name="pokemonName"
                    onChange={handleSearch}
                    value={searchValue}
                />
            </div>
        );
    };
};

export default Filters;