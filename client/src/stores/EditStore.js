import AppDispatcher from '../dispatcher/AppDispatcher.js';
import EditConstants from '../constants/EditConstants.js';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _mode = 'isCreating';
let _selectedPost = {};
let _title = ''

function setSelectedPost(post) {
  _selectedPost = post;
}

function setMode(mode) {
  _mode = mode;
}

class EditStoreClass extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  getSelectedPost() {
    return _selectedPost;
  }

  getMode() {
    return _mode;
  }

  getTitle() {
    return _title;
  }
}

const EditStore = new EditStoreClass();

EditStore.dispatchToken = AppDispatcher.register(action => {
  switch(action.type) {
    case EditConstants.SELECT_POST:
      setSelectedPost(action.post);
      EditStore.emitChange();
      break;

    case EditConstants.CHANGE_MODE:
      setMode(action.mode);
      EditStore.emitChange();
      break;

    default:
      return
  }
})

export default EditStore;
