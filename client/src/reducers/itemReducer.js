export const itemReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state, action.payload;
    default:
      return state;
  }
};
