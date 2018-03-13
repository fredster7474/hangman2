import React, { Component } from 'react';
import ChoiceButton from './components/ChoiceButton'
import './App.css';
import Hangman from './components/Hangman'
//import Inputfield from './components/Inputfield'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Hangman!</h1>
          <Hangman/>
          <ChoiceButton/>
      </div>
    );
  }
}

export default App;
