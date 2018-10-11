import React, { Component } from "react";
class Detail extends Component {
    render() {
        const {id} = this.props.match.params;
        const {pokemonList} = this.props;
        const pokemonToPrint = pokemonList[id-1];
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
            <div>
                <div>
                    <img src={photo} alt={name}/>
                    <h1>{name}</h1>

                </div>
            </div>
         );
    }
}
 
export default Detail;