import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
                    placeholder="Filter pokemon by name..."
                    className="inputFilter"
                />
            </div>
        );
    };
};

Filters.propTypes = {
    handleSearch: PropTypes.func,
    searchValue: PropTypes.string
};

export default Filters;