import React, { useReducer } from "react";
import reducer from "./reducers/calcReducer";
import "./styles.css";
import actions from "./actions/calcActions";

// let currentState = { currentValue: 0, memory: 0 };

// currentState = reducer(currentState, actions.addAction(5));
// console.log(currentState);
// currentState = reducer(currentState, actions.subtractionAction(3));
// console.log(currentState);
// currentState = reducer(currentState, actions.multiplyAction(2));
// console.log(currentState);
// currentState = reducer(currentState, actions.addToMemoryAction());
// console.log(currentState);
// currentState = reducer(currentState, actions.clearAction());
// console.log(currentState);
const initialState = { currentValue: 0, memory: 0 };
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleAdd = () => {
    dispatch(actions.addAction(5));
  };

  const handleSubtract = () => {
    dispatch(actions.subtractionAction(2));
  };

  const handleClear = () => {
    dispatch(actions.clearAction());
  };

  return (
    <div className="App">
      <textarea
        rows="1"
        value={state.currentValue}
        id="total"
        type="text"
        name="ans"
      ></textarea>
      <br />
      <button type="button" onClick={handleAdd} className="btn">
        + 5
      </button>
      <button type="button" onClick={handleSubtract} className="btn">
        - 2
      </button>
      <button type="button" onClick={handleClear} className="btn">
        Clear
      </button>
    </div>
  );
}
