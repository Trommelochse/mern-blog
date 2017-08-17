import React from 'react';
import { Link } from 'react-router-dom';
import EditActions from '../../actions/EditActions.js';

const EditLink = (props) => {

  function handleSelectPost() {
    EditActions.selectPost(props.post);
  }
  return (
    <Link to={`/admin/posts/${props.post._id}`} className="collection-item" onClick={handleSelectPost} >{props.post.title}</Link>
  )
}

export default EditLink;
