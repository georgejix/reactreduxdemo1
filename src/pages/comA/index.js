import React from 'react'
import { connect } from 'react-redux'

class ComA extends React.Component {
    handleClick = () => {
        console.log("comA", this.props);
        this.props.sendAction();
    }

    render() {
        return <button onClick={this.handleClick}>+</button>
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        sendAction: () => {
            dispatch({
                type: 'add_action'
            });
        }
    }
}

export default connect(null, mapDispatchProps)(ComA);