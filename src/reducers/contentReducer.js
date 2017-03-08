import * as actions from '../constants/actionTypes';
import initialState from './initialState';

export default function contentReducer(state = initialState.content, action) {
  switch (action.type) {
    case actions.CHANGE_ACTIVE_SLIDE:
      return {
        ...state,
        activeSlide: action.slideNumber,
      };

    case actions.CHANGE_COLLAPSE:
      return {
        ...state,
        collapsed: !state.collapsed,
      };

    default:
      return state;
  }
}
