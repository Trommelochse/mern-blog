import React, { Component } from 'react';

import AppActions from './actions/AppActions.js';
import AppStore from './stores/AppStore.js';
import EditStore from './stores/EditStore.js';

import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Side from './components/Side.js';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPost: {}
    }
    this.onPostsChange = this.onPostsChange.bind(this);
    this.onEditChange = this.onEditChange.bind(this);
  }

  componentWillMount() {
    AppStore.addChangeListener(this.onPostsChange);
    EditStore.addChangeListener(this.onEditChange);
  }

  componentDidMount() {
    AppActions.fetchPosts();
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.onPostsChange);
    EditStore.removeChangeListener(this.onEditChange);
  }

  onPostsChange() {
    this.setState({
      posts: AppStore.getPosts(),
      currentPost: AppStore.getCurrentPost()
    });
  }
  onEditChange() {
    this.setState({
      editSelectedPost: EditStore.getSelectedPost(),
      editMode: EditStore.getMode()
    });
  }

  onSelectPost

  render() {
    if (!this.state.posts.length) { return (<p>loading...</p>) }
    return (
      <div className="App">
        <Nav />
        <div className="container page">
          <div className="row">
            <Main />
            <Side />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
