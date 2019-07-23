import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/action-index';

import Foundation from '../../components/foundation/foundation'
import Towers from '../../components/towers/towers'


class Game extends Component {
    render () {
        return (
            <div>
                {this.props.completed ? <div className='mb-5 font-weight-bold'>COMPLETED</div> : null}
                <Towers 
                    clicked={this.props.onChooseATower} 
                    disks={this.props.towers}
                    liftedTower = {this.props.liftedTower}
                    liftedDisk = {this.props.liftedDisk}
                />
                <Foundation/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        towers: state.towers,
        liftedTower: state.indexOfTowerHasADiskAbove,
        liftedDisk: state.sizeOfliftUpDisk,
        completed: state.completed,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChooseATower : (towerIndex) => dispatch(actionCreators.chooseATower(towerIndex)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);