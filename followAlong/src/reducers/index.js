import calcActions from "../../../review/src/actions/calcActions";

import { SET_TITLE, SET_EDITING, SET_NEW_TEXT_TITLE } from "./../actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload };
    case SET_EDITING:
      return { ...state, editing: action.payload };
    case SET_NEW_TEXT_TITLE:
      return { ...state, newTitleText: action.payload };
    default:
      return state;
  }
};

export default reducer;
