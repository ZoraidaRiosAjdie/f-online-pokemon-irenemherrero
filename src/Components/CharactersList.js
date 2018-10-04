import React, { Component } from 'react';
import CharacterCard from './CharacterCard.js';

class CharactersList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <CharacterCard/>
         );
    }
}
 
export default CharactersList;