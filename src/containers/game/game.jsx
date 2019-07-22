import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/action-index';

import Foundation from '../../components/foundation/foundation'
import Towers from '../../components/towers/towers'


class Game extends Component {
    render () {
        return (
            <div>
                <Towers clicked={this.props.onChooseATower}/>
                <Foundation/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        towers: state.towers,
        indexOfTowerHasADiskAbove: state.indexOfTowerHasADiskAbove,
        sizeOfliftUpDisk: state.sizeOfliftUpDisk,

    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChooseATower : (towerIndex) => dispatch(actionCreators.chooseATower(towerIndex)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);