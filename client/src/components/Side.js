import React, { Component } from 'react';
import AppStore from '../stores/AppStore.js';
import { Route } from 'react-router-dom';

import PostPreview from './PostPreview.js';
import EditLink from './backend/EditLink.js';

import _ from 'lodash';

class Side extends Component {

  constructor(props) {
    super(props);
    this.getRecentPosts = this.getRecentPosts.bind(this);
  }

  getRecentPosts() {
    let posts = AppStore.getPosts();
    posts = _.take(posts, 2);
    return posts;
  }

  render() {
    return (
      <div className="col s12 m3 push-m1 side">
        <Route exact path="/" render={ () => {
            const posts=this.getRecentPosts();
            return (
              <div>
                <h5 className="grey-text text-darken-3">Recent</h5>
                {posts.map(post => <PostPreview post={post} key={post._id} />) }
              </div>
            )
          }  }/>

        <Route path="/admin/" render={ () => {
            const posts=AppStore.getPosts();
            return (
              <div>
                <h5 className="grey-text text-darken-3">Posts</h5>
                  <div className="collection">
                    {posts.map(post => <EditLink post={post} key={post._id} />) }
                  </div>
              </div>
            )
          }  }/>
      </div>
    );
  }
}

export default Side;
