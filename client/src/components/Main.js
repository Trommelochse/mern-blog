import React ,{ Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home.js';
import Post from './Post.js';
import PostsDashboard from './PostsDashboard.js'
import PostEditorCreate from './backend/PostEditorCreate.js';
import PostEditorEdit from './backend/PostEditorEdit.js';

class Main extends Component {

  render() {
    return (
      <div className="col s12 m9 main">
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/:id" component={Post} />
        <Route exact path="/posts/" component={PostsDashboard} />
        <Route exact path="/admin/posts/" component={PostEditorCreate} />
        <Route exact path="/admin/posts/:id" component={PostEditorEdit} />
      </div>
    )
  }
}

export default Main;
