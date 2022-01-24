const INITIAL_STATE = {
    name: 'Samar',
    phone: ''
}
const reducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
        case 'SET_NAME':
            return{
                ...state,
                name: action.payload
            }
        case 'SET_PHONE':
            return{
                ...state,
                phone: action.payload
            }
        default:
			return state;
	}
};
export default reducers;

