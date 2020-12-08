import React from 'react'
import { connect } from 'react-redux'

class ComB extends React.Component {
    render() {
        console.log("comB render", this.props);
        return <div>{this.props.count}</div>
    }
}

const mapStateToProps = (state) => {
    console.log("comB map ", state);
    return state;
}

export default connect(mapStateToProps)(ComB);