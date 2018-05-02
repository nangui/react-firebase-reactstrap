import React, { Component } from 'react';
import './App.css';
import logo from './logo.png'
import FormAddPost from './components/FormAddPost'
import ListPost from './components/ListPost'
import { database } from './firebase'
import _ from 'lodash'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {}
    };
  }

  // lifecycle
  componentDidMount() {
    database.on('value', snapshot => {
      this.setState({
        posts: snapshot.val()
      })
    })
  }

  // Fonction permettant de recuprérer les posts de la base de donnée
  renderPosts() {
    return _.map(this.state.posts, (post, key) => {
      return <div key={key}>
          <ListPost post={post} />
        </div>;
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img
              src={logo}
              className="img-fluid App-logo"
              width="12%"
              height="12%"
              alt="Logo"
            />
          </div>
        </header>
        <div className="container">
          <FormAddPost />
          <br />
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}

export default App;
