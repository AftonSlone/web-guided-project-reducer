export const SET_TITLE = "SET_TITLE";
export const SET_EDITING = "SET_EDIT";
export const SET_NEW_TEXT_TITLE = "SET_NEW_TEXT_TITLE";

const setTitle = (title) => {
  return { type: SET_TITLE, payload: title };
};

const setEditing = (willEdit) => {
  return { type: SET_EDITING, payload: willEdit };
};

const setNewTextTitle = (title) => {
  return { type: SET_NEW_TEXT_TITLE, payload: title };
};

export default {
  setTitle: setTitle,
  setEditing: setEditing,
  setNewTextTitle: setNewTextTitle,
};
