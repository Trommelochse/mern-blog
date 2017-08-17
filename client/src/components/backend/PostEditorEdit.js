import React, { Component } from 'react';
import AppStore from '../../stores/AppStore.js';
import _ from 'lodash';
import axios from 'axios';

class PostEditorEdit extends Component {

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
    const post = {title, subtitle, body, tags};

    axios.post('http://localhost:5000/api/posts/new', post)
    .then((response) => {
      console.log(response);
    });
  }

  render() {
    const post = AppStore.getPostById(this.props.match.params.id);
    return (
      <form className="col s12 post-editor" onSubmit={(ev) => this.handleSubmit(ev)} >
        <div className="row">
          <div className="col s12">
            <p className="flow-text">{`Editing post "${post.title}"`}</p>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="title"
              type="text"
              className="validate"
              placeholder="Title"
              defaultValue={post.title}
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
              defaultValue={post.subtitle}
              onChange={(ev) => this.handleSubtitleChange(ev)} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              id="body"
              className="materialize-textarea"
              placeholder="Content"
              defaultValue={post.body}
              onChange={(ev) => this.handleBodyChange(ev)}  />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="title"
              type="text"
              className="validate"
              placeholder="Tags"
              defaultValue={post.tags.join(', ')}
              onChange={(ev) => this.handleTagsChange(ev)} />
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

export default PostEditorEdit;
