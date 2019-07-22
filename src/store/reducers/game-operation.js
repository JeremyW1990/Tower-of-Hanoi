import * as actionTypes from '../actions/action-types'

const initialState = {
    result: 0
};

const chooseATower = ( state, action ) => {
    console.log("Hit choose_a_tower reducer with action payload: " , action.towerIndex );
    return state;
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.CHOOSE_A_TOWER : return chooseATower(state, action);
    }
    return state;
};

export default reducer;