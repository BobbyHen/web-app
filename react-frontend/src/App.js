import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Button from './components/Button'
import QuoteDisplay from './components/QuoteDisplay'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title/>
          <QuoteDisplay/>
          <Button/>
        </header>
      </div>
    );
  }
}


export default App;
