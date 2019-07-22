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
        result: state.result
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChooseATower : (towerIndex) => dispatch(actionCreators.chooseATower(towerIndex)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);