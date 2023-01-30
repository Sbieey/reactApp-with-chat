import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import utilsReducer from './utilsReducers';

const rootReducer = combineReducers({
  posts: postsReducer,
  utils: utilsReducer,
});

export default rootReducer;
