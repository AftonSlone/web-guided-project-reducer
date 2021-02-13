export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const MULTIPLY = "MULTIPLY";
export const ADD_TO_MEMORY = "ADD_TO_MEMORY";
export const CLEAR = "CLEAR";

const addAction = (value) => {
  return { type: "ADD", payload: value };
};

const subtractionAction = (value) => {
  return { type: "SUBTRACT", payload: value };
};

const multiplyAction = (value) => {
  return { type: "MULTIPLY", payload: value };
};

const addToMemoryAction = (value) => {
  return { type: "ADD_TO_MEMORY" };
};

const clearAction = (value) => {
  return { type: "CLEAR" };
};

export default {
  addAction: addAction,
  subtractionAction: subtractionAction,
  addToMemoryAction: addToMemoryAction,
  clearAction: clearAction,
  multiplyAction: multiplyAction,
};
