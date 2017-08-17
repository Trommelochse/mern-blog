import React from 'react';
import { Link } from 'react-router-dom';
import AppActions from '../actions/AppActions.js';


const PostPreview = (props) => {

  function viewPost() {
    AppActions.viewPost(props.post._id)
  }

  return (
    <Link to={`/posts/${props.post._id}/`} onClick={viewPost} >
      <div className="card post-preview hoverable">
        <div className="card-content">
          <p className="post-preview-title">{ props.post.title }</p>
          <p className="post-preview-subtitle">{ props.post.subtitle }</p>
        </div>
      </div>
    </Link>
  )
}

export default PostPreview;
