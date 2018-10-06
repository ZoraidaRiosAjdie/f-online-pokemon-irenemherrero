import React, { Component } from 'react';
import '../Styles/App.css';
import Main from './Main';
import LoadingPage from './LoadingPage';

let arrayPokemons = [];
const numberPokemonToSearch = 25;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      filteredList: [],
      searchValue: null,
    }
    this.fetchData = this.fetchData.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.selectListToPrint = this.selectListToPrint.bind(this);
  }

  componentDidMount() {
    const URL = 'https://pokeapi.co/api/v2/pokemon/'
    for (let i = 1; i < numberPokemonToSearch + 1; i++) {
      this.fetchData(`${URL}${i}/`);
    }
  }

  fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        arrayPokemons[json.id - 1] =
          {
            id: json.id,
            name: json.name,
            photo: json.sprites.front_default,
            types: "",
          };
        json.types.map(type => arrayPokemons[json.id - 1].types = [...arrayPokemons[json.id - 1].types, type.type.name,]
        );
        this.setState({
          pokemonList: arrayPokemons,
        });
      })
  }

  handleSearch(e) {
    console.log(e.target.value);
    const search = e.target.value.toLowerCase();
    this.setState({
      searchValue: search,
      filteredList: 
        this.state.pokemonList.filter(pokemon => {
        return pokemon.name.includes(search);
        })
    });
  }

  selectListToPrint(){
    const { filteredList, pokemonList, searchValue } = this.state;
    return !searchValue
      ? pokemonList
      : filteredList
    }

  render() {
        return this.state.pokemonList.length === numberPokemonToSearch 
            ? <Main 
                handleSearch={this.handleSearch}
                pokemonList={this.selectListToPrint}/>
            : <LoadingPage/>
  }
}

export default App;
