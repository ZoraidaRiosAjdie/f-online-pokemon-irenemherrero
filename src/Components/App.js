import React, { Component } from 'react';
import '../Styles/App.css';
import Filters from './Filters';
import CharactersList from './CharactersList';

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
    const numberOfPokemon = 25;
    const arrayPokemons = [];
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      console.log(json);
      arrayPokemons.push(json.name);
      console.log(arrayPokemons);
      // for(let j = 0; j < numberOfPokemon; j++)

      // })
  })
}
  
  
    // var pokemonResults = json.results;
    // var pokemonArray = [];
    // console.log(pokemonResults);
    // for(var i = 0; i < pokemonResults.length; i++){
    //   pokemonArray[i] = pokemonResults[i].name;
    //   // fetch (`http://pokeapi.salestock.net/api/v2/pokemon/${i+1}`);
    // }
    // this.createPromise();
    // })
  // .then(function(results){
  //   return results.json();
  // })
  // .then(function(resJson){
  //   console.log(resJson);
  // })


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
