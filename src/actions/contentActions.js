import * as types from '../constants/actionTypes';

// Change visible slide
export function changeActiveSlide(slideNumber) {
  return (dispatch) => {
    dispatch({ type: types.CHANGE_ACTIVE_SLIDE, slideNumber });
  };
}

// Change collapsed status
export function changeCollapseOption() {
  return (dispatch) => {
    dispatch({ type: types.CHANGE_COLLAPSE });
  };
}
