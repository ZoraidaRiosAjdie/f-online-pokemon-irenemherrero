import React, { Component } from 'react';
import '../Styles/App.css';
import Filters from './Filters';
import CharactersList from './CharactersList';

let arrayPokemons = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pokemons: []
     }
    this.fetchData=this.fetchData.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
}

componentDidMount(){
  const URL = 'https://pokeapi.co/api/v2/pokemon/'
  const numberPokemonToSearch = 4;
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
        pokemons: arrayPokemons,
      }, console.log(this.state.pokemons));
  })
}

handleSearch(){
  console.log('holi');
}

  render() {
    return (
      <div className="App">
        <Filters handleSearch={this.handleSearch}/>
        <CharactersList/>
      </div>
    );
  }
}

export default App;
