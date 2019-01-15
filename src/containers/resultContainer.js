import React, { Component } from 'react';
import { connect } from 'react-redux';
 import { resetResult } from '../actions';

class ResultContainer extends Component {

    resetResult = () => {
        this.props.resetResult();
    }

    getStateAndHelpers() {
        return {
            error: this.props.error,
            message: this.props.message,
            resetResult: this.resetResult
        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


const mapStateToProps = (state) => {
    return {
        error: state.data.error,
        message: state.data.message
    }
}

export default connect(mapStateToProps, {  resetResult })(ResultContainer);