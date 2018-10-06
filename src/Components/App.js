import React, { Component } from 'react';
import '../Styles/App.css';
import Filters from './Filters';
import CharactersList from './CharactersList';

let arrayPokemons = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pokemonList: []
     }
    this.fetchData=this.fetchData.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
}

componentDidMount(){
  const URL = 'https://pokeapi.co/api/v2/pokemon/'
  const numberPokemonToSearch = 8;
  for(let i = 1; i < numberPokemonToSearch+1; i++){
    this.fetchData(`${URL}${i}/`);
    }
  }

  fetchData(url){
    fetch(url)
    .then(response => response.json())
    .then(json => {
      arrayPokemons[json.id-1] = 
        {
              id: json.id,
              name: json.name,
              photo: json.sprites.front_default,
              types: "",
            };
      json.types.map(type => arrayPokemons[json.id-1].types = [...arrayPokemons[json.id-1].types, type.type.name,]
      );
      this.setState({
        pokemonList: arrayPokemons,
      }, console.log(this.state.pokemonList));
  })
}

handleSearch(e){
  console.log(e.target.value);
}

  render() {
    return (
      <div className="App">
        <h1 className='appTitle'>Pokemon Searcher</h1>
        <Filters handleSearch={this.handleSearch}/>
        <CharactersList pokemonList={this.state.pokemonList}/>
      </div>
    );
  }
}

export default App;
