import React, { Component } from "react";
import axios from "axios";
import Characters from "./components/Characters.jsx";
import "./App.css";

class App extends Component {
  state = {};
  //get data from url using axios
  async componentDidMount() {
    const { data: characters } =
      await axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=20
    `);

    //characters to be stored in state
    this.setState({ characters });
  }
  render() {
    //characters are in this.state
    const { characters } = this.state;
    //if no character info is found, page is still loading
    if (!this.state.characters) return <p> Doh! Still loading your quotes!</p>;
    //character info is found
    return <Characters characters={characters} />;
  }
}
export default App;
