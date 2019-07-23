import * as actionTypes from '../actions/action-types'

const initialState = {
    totalDisks: 3,
    towers: [Array.from({length: 3}, (v, k) => k + 1), [], [] ],
    indexOfTowerHasADiskAbove : -1,
    sizeOfliftUpDisk: 0,
    completed: false,
};


const chooseATower = ( state, action ) => {
    /* If there is no disk on the tower that user click, and no disk has been lift up, then do nothing */
    if (state.indexOfTowerHasADiskAbove === -1 && state.towers[action.towerIndex].length === 0) {
        return state;
    }

    /* If the player clicks the same tower that has already has a lifted up disk, put that disk down */
    if (state.indexOfTowerHasADiskAbove === action.towerIndex ) {
        return {
            ...state,
            indexOfTowerHasADiskAbove : -1,
            sizeOfliftUpDisk: 0,
        }
    }

    /* 
        If the player clicks the different tower and a disk is lifted up, put it down to that tower 
        ( If it doesn't violate the game rule)
     */    

    if (state.indexOfTowerHasADiskAbove > -1 && 
        state.indexOfTowerHasADiskAbove !== action.towerIndex && 
        /* The action can only be completed when
            1. The lifted disk is smaller than the disk it about to be put on,
            2. The tower has no disk at all
        */
        (state.towers[action.towerIndex][0] > state.sizeOfliftUpDisk || 
         state.towers[action.towerIndex].length === 0 )) {

            const liftedTower = [...state.towers[state.indexOfTowerHasADiskAbove]];
            const destinationTower = [...state.towers[action.towerIndex]];
            destinationTower.unshift(liftedTower.shift());

            const towers = [...state.towers];
            towers[action.towerIndex] = destinationTower;
            towers[state.indexOfTowerHasADiskAbove] = liftedTower;

            /* Winning condition check */
            let completed = state.completed;
            if (towers[2].length === state.totalDisks ) { completed = true};
            return {
                ...state,
                towers,
                indexOfTowerHasADiskAbove : -1,
                sizeOfliftUpDisk: 0,
                completed,
            }
    }
    
    /* Lift a disk up */

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