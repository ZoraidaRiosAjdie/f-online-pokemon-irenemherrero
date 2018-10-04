import React, { Component } from 'react';
import '../Styles/App.css';
import Filters from './Filters';
import CharactersList from './CharactersList';

let arrayPokemons = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.fetchData=this.fetchData.bind(this);
}

componentDidMount(){
  const URL = 'http://pokeapi.salestock.net/api/v2/pokemon/'
  const numberPokemonToSearch = 25;
  for(let i = 1; i < numberPokemonToSearch+1; i++){
    this.fetchData(`${URL}${i}`);
    }
  }

  fetchData(url){
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      console.log(json);
      arrayPokemons = [
        ...arrayPokemons,
        {
          id: json.id,
          name: json.name,
          photo: json.sprites.front_default,
          types: "",
        }
      ];
      console.log(arrayPokemons);
      // for(let j = 0; j < numberOfPokemon; j++)

      // })
  })
}

  render() {
    return (
      <div className="App">
        <Filters/>
        <CharactersList/>
      </div>
    );
  }
}

export default App;
