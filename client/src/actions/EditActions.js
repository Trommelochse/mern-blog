import AppDispatcher from '../dispatcher/AppDispatcher.js';
import EditConstants from '../constants/EditConstants.js';

const EditActions = {

  selectPost(post) {
    AppDispatcher.dispatch({
      type: EditConstants.SELECT_POST,
      post
    });
  },

  changeMode(mode) {
    AppDispatcher.dispatch({
      type: EditConstants.CHANGE_MODE,
      mode
    });
  }
};

export default EditActions;
