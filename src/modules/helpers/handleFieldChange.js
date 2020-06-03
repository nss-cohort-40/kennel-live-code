

const handleFieldChange = (evt, state, func) => {
  const stateToChange = { ...state };
  stateToChange[evt.target.id] = evt.target.value;
  func(stateToChange);
};

export default handleFieldChange
