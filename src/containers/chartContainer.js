import { Component } from 'react';
import { connect } from 'react-redux';
 import { fetchData } from '../actions';

class ChartContainer extends Component {

    componentDidMount(){
        this.props.fetchData();
    }

    getStateAndHelpers() {
        return {
            items: this.props.items,
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
        items: state.data.items
    }
}

export default connect(mapStateToProps, { fetchData })(ChartContainer);