import React, { Component } from 'react';
import './App.css';
import FormAddPost from './components/FormAddPost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Adonaï Nangui Blog</h1>
        </header>
        <div className="container">
          <FormAddPost />
        </div>
      </div>
    );
  }
}

export default App;
