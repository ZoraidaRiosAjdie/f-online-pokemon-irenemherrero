import React, { Component } from "react";
import Main from "./Main";
import LoadingPage from "./LoadingPage";

const arrayPokemons = [];
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
      console.log('LS');
      this.setState({
        pokemonList: listFromLocalStorage
      });
    } else {
    const URL = "https://pokeapi.co/api/v2/pokemon/";
    for (let i = 0; i < numberPokemonToSearch; i++) {
      this.fetchData(`${URL}${i + 1}/`, i);
      };
    };
  };

  // 2. Llamada a la API y construcción de objeto con datos de pokemon.

  fetchData(url, i) {
    fetch(url)
      .then(response => response.json())
      .then(json => {

        //Meter datos básicos del pokemon en arrayPokemons.

        arrayPokemons[i] = {
          id: json.id,
          name: json.name,
          photo: json.sprites.front_default,
          height: json.height,
          weight: json.weight,
          types: [],
          abilities: [],
          images: [],
          evolutions: [],
        };

        //Meter tipos

        json.types.map(
          type =>
            arrayPokemons[i].types.push(type.type.name)
        );

        //Meter habilidades

        json.abilities.map(
          ability =>
            arrayPokemons[i].abilities.push(ability.ability.name)
        );

        //Meter imágenes

        arrayPokemons[i].images.push(
          json.sprites.front_default, 
          json.sprites.back_default, 
          json.sprites.front_shiny, 
          json.sprites.back_shiny
        );
        
        // Meter evoluciones

        fetch(json.species.url)
          .then(response => response.json())
          .then(json => {
            fetch(json.evolution_chain.url)
            .then(response => response.json())
            .then (json => {
              const evolution0 = json.chain.species.name;
              arrayPokemons[i].evolutions.push(evolution0);
                if(json.chain.evolves_to[0] !== undefined){
                  const evolution1 = json.chain.evolves_to[0].species.name;
                  arrayPokemons[i].evolutions.push(evolution1);
                }
                if(json.chain.evolves_to[0].evolves_to[0] !== undefined){
                  const evolution2 = json.chain.evolves_to[0].evolves_to[0].species.name;
                  arrayPokemons[i].evolutions.push(evolution2);
                }
              this.saveDataInState();
            });
          });
      });
    }

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
