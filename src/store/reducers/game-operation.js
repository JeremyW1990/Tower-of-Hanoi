import * as actionTypes from '../actions/action-types'

const initialState = {
    towers: [[1, 2, 3], [], [] ],
    indexOfTowerHasADiskAbove : -1,
    sizeOfliftUpDisk: 0,
};


const chooseATower = ( state, action ) => {
    /* If there is no disk on the tower that user click, and no disk has been lift up, then do nothing */
    if (state.indexOfTowerHasADiskAbove === -1 && state.towers[action.towerIndex].length === 0) return state;

    /* If the player clicks the same tower that has already has a lifted up disk, put that disk down */
    if (state.indexOfTowerHasADiskAbove === action.towerIndex ) 
        return {
            ...state,
            indexOfTowerHasADiskAbove : -1,
            sizeOfliftUpDisk: 0,
        }


    const sizeOfliftUpDisk = state.towers[action.towerIndex][0];

    return {
        ...state,
        indexOfTowerHasADiskAbove: action.towerIndex,
        sizeOfliftUpDisk,
    }
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.CHOOSE_A_TOWER : return chooseATower(state, action);
    }
    return state;
};

export default reducer;