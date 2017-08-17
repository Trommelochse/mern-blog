import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';
import axios from 'axios';

const AppActions = {

  fetchPosts: () => {
    axios.get('/api/posts')
    .then( response => {
      const posts = response.data;
      posts.sort((a,b) => a.createdAt < b.createdAt);
      AppDispatcher.dispatch({
        type: AppConstants.FETCH_POSTS,
        posts
      });
    })
    .catch( err => {
      if (err) { throw err }
    });
  },

  viewPost(id) {
    AppDispatcher.dispatch({
      type: AppConstants.VIEW_POST,
      postId: id
    })
  }
};

export default AppActions;
