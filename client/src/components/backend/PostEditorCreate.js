import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';

class PostEditorCreate extends Component {

  handleTitleChange(ev) {
    this.setState({ title: ev.target.value });
  }

  handleSubtitleChange(ev) {
    this.setState({ subtitle: ev.target.value });
  }

  handleBodyChange(ev) {
    this.setState({ body: ev.target.value });
  }

  handleTagsChange(ev) {
    let tags = ev.target.value;
    tags = tags.split(',')
    tags = tags.map((tag) => tag.trim());
    tags = _.uniq(tags);
    this.setState({ tags });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const {title, subtitle, body, tags} = this.state;
    const createdAt = Date.now();
    const post = {title, subtitle, body, tags, createdAt};
    console.log(post);
    axios.post('http://localhost:5000/api/posts/new', post)
    .then((response) => {
      const id = response.data._id;
      // window.location = '/posts/' + id;
    });
  }

  render() {
    return (
      <form className="col s12 post-editor" onSubmit={(ev) => this.handleSubmit(ev)} >
        <div className="row">
          <div className="col s12">
            <p className="flow-text">Writing new Blog Post</p>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="title"
              type="text"
              className="validate"
              placeholder="Title"
              onChange={(ev) => this.handleTitleChange(ev)} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="title"
              type="text"
              className="validate"
              placeholder="Subtitle"
              onChange={(ev) => this.handleSubtitleChange(ev)} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea id="body" className="materialize-textarea" placeholder="Content" onChange={(ev) => this.handleBodyChange(ev)}  />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="title" type="text" className="validate" placeholder="Tags" onChange={(ev) => this.handleTagsChange(ev)} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <button className="btn" type="submit">Save</button>
          </div>
        </div>
      </form>
    );
  }
}

export default PostEditorCreate;
