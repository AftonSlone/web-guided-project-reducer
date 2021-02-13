import React, { useState, useReducer } from "react";
import reducer from "./../reducers";
import actions from "./../actions";

const Title = () => {
  const initialState = {
    title: "Hello Earthlings",
    editing: false,
    newTitleText: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = (e) => {
    dispatch(actions.setNewTextTitle(e.target.value));
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{" "}
          <i
            onClick={() => dispatch(actions.setEditing(!state.editing))}
            className="far fa-edit"
          />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch(actions.setTitle(state.newTitleText));
              dispatch(actions.setEditing(false));
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;
