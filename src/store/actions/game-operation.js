import * as actionTypes from './action-types';



export const chooseATower = (towerIndex) => {
    return {
        type: actionTypes.CHOOSE_A_TOWER,
        towerIndex,
    };
}
