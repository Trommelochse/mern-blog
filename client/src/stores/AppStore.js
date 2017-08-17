import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';
import { EventEmitter } from 'events';
import _ from 'lodash';

const CHANGE_EVENT = 'change';

let _posts = [];
let _currentPost = {};

function setPosts(posts) {
  _posts = posts;
  if (!_currentPost._id) {
    _currentPost = posts[0];
  }
}

function setCurrentPost(id) {
  _currentPost = AppStore.getPostById(id);
}

class AppStoreClass extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  getPosts() {
    return _posts;
  }

  getPostById(id) {
    return _.find(_posts, post => post._id === id);
  }

  getCurrentPost() {
    return _currentPost;
  }

  getNextPost() {
    const currentIndex = _.indexOf(_posts, _currentPost);
    console.log(currentIndex);
  }
}

const AppStore = new AppStoreClass();

AppStore.dispatchToken = AppDispatcher.register(action => {
  switch(action.type) {
    case AppConstants.FETCH_POSTS:
      setPosts(action.posts);
      AppStore.emitChange();
      break;

    case AppConstants.VIEW_POST:
      setCurrentPost(action.postId);
      AppStore.emitChange();
      break;

    default:
      return
  }
})

export default AppStore;
