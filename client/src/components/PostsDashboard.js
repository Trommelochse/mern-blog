import React ,{ Component } from 'react';
import AppStore from '../stores/AppStore.js';

import PostPreview from './PostPreview.js';


class PostsDashboard extends Component {
  render() {
    const posts = AppStore.getPosts();

    return (
      <div className="post-dashboard">
        { posts.map((post) => <PostPreview post={post}  key={post._id}/>) }
      </div>
    )
  }
}

export default PostsDashboard;
