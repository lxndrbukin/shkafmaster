export const offerReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_OFFERS':
      return state, action.payload;
    case 'ADD_OFFER':
      return state, action.payload;
    default:
      return state;
  }
};
