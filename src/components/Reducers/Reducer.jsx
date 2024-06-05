// reducers/airlineReducer.js

const airlineReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_AIRLINE':
            return [...state, action.payload];
        default:
            return state;
    }
};

export default airlineReducer;
