const initialState = {
  active: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_APP":
      return {
        ...state,
        active: false
      };

    default:
      return state;
  }
};
