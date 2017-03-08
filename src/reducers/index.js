import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import content from './contentReducer';

export default combineReducers({
  content,
  routing: routerReducer,
});
