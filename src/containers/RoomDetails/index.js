import React, { Component } from 'react'
import {connect} from 'react-redux'

class RoomDetails extends Component {
    render() {

        return <div className='col-md-offset-3'>
            Детали комнаты с ид={this.props.params.roomId}
            {this.props.children}
        </div>
    }
}

const mapStateToProps = (state) => ({
    st: state
});
/*
function mapDispatchToProps(dispatch) {
    return {
        addRoom: bindActionCreators(addRoom, dispatch),
        filterByRoomName: bindActionCreators(filterByRoomName, dispatch)
    }
}*/
export default connect(mapStateToProps)(RoomDetails)
