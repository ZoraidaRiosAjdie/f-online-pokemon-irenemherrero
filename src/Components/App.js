import React, { Component } from "react";
import Main from "./Main";
import LoadingPage from "./LoadingPage";

let arrayPokemons = [];
const numberPokemonToSearch = 25;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      filteredList: [],
      searchValue: ""
    };
    this.fetchData = this.fetchData.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.selectListToPrint = this.selectListToPrint.bind(this);
    this.saveDataInState = this.saveDataInState.bind(this);
    this.saveDataInLocalStorage = this.saveDataInLocalStorage.bind(this);
  }

  //1. Rescatar datos de LS (si hay) o preparar llamada a la API

  componentDidMount() {
    const listFromLocalStorage = JSON.parse(localStorage.getItem("pokemon-list"));
    if (listFromLocalStorage) {
      this.setState({
        pokemonList: listFromLocalStorage
      });
    } else {
      const URL = "https://pokeapi.co/api/v2/pokemon/";
      for (let i = 0; i < numberPokemonToSearch; i++) {
        this.fetchData(`${URL}${i + 1}/`);
      };
    };
  };

  // 2. Llamada a la API y construcción de objeto con datos de pokemon.

  fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        arrayPokemons[json.id - 1] = {
          id: json.id,
          name: json.name,
          photo: json.sprites.front_default,
          types: ""
        };
        json.types.map(
          type =>
            (arrayPokemons[json.id - 1].types = [
              ...arrayPokemons[json.id - 1].types,
              type.type.name
            ])
        );
        this.saveDataInState();
      });
  };

  //3. Meter datos de la API en el estado

  saveDataInState() {
    this.setState(
      {
        pokemonList: arrayPokemons
      },
      this.saveDataInLocalStorage()
    );
  };

  //4. Guardar datos en el Local Storage

  saveDataInLocalStorage() {
    localStorage.setItem("pokemon-list", JSON.stringify(arrayPokemons));
  };

  //5. Controlar el evento del input: cuando escribes, se filtra la lista de pokemon inicial y los filtrados se meten en el array filteredList del estado.

  handleSearch(e) {
    const search = e.target.value.toLowerCase();
    this.setState({
      searchValue: search,
      filteredList: this.state.pokemonList.filter(pokemon => {
        return pokemon.name.includes(search);
      })
    });
  };

  //6. Seleccinar la lista de pokemon que renderizar: la inicial o la filtrada

  selectListToPrint() {
    const { filteredList, pokemonList, searchValue } = this.state;
    return !searchValue ? pokemonList : filteredList;
  };

  render() {
    return this.state.pokemonList.length === numberPokemonToSearch 
    ? <Main
        handleSearch={this.handleSearch}
        pokemonList={this.selectListToPrint}
        searchValue={this.state.searchValue}
      />
    : <LoadingPage />
  };
};

export default App;
