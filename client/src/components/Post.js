import React from 'react';
import { Redirect } from 'react-router';
import ReactMarkdown from 'react-markdown';
import AppStore from '../stores/AppStore.js';

const Post = ({match}) => {
  let post = AppStore.getPostById(match.params.id);
  if (!post) {
    return(
      <Redirect to={{
          pathname: '/posts'
        }}/>
    )
  }


  const postCreationDate = new Date(post.createdAt);
  return (
    <div className="row post">
      <div className="col s12 post-top">
        <div className="row">
          <div className="col s12 m8">
            <h2>{ post.title }</h2>
            <h3 className="flow-text">{ post.subtitle }</h3>
          </div>
          <div className="col s12 m4 post-info right-align">
            <p className="grey-text lighten-1 post-date">Created on { postCreationDate.toLocaleDateString() }</p>
            { post.tags.map(tag => <span className="chip teal lighten-1" key={tag}>{tag}</span> ) }
          </div>
        </div>
      </div>
      <div className="col s12 post-body">
        <ReactMarkdown source={ post.body } />
      </div>
    </div>
  );
}

export default Post;
