export const orderReducer = (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_ORDERS':
			return (state, action.payload);
		case 'MAKE_ORDER':
			return (state, action.payload);
		default:
			return state;
	}
}