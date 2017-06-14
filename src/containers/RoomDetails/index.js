import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {saveRoomDetails} from '../../actions'
import {bindActionCreators} from 'redux'
import * as ReactDOM from 'react-dom';

class RoomDetails extends Component {
    handelSaveRoomDetails(e){
        e.preventDefault();
        let roomField = ReactDOM.findDOMNode(this.refs.roomName);
        let roomDescription = ReactDOM.findDOMNode(this.refs.roomDescription);
        this.props.saveRoomDetails(roomField.value.trim(), roomDescription.value.trim())
    }

    render() {
        let { rooms } = this.props;
        let roomId = this.props.params.roomId;
        return <div>
            <form onSubmit={::this.handelSaveRoomDetails}>
                <div className='row'>
                    <div className='col-md-6 form-group'>
                        <h3><span className='label label-info'>ROOM DETAILS</span></h3>
                    </div>
                    <div className='com-md-6 form-group'>
                        <button className='btn btn-danger'>Delete room</button>
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'>Name:</label>
                    <div className='col-sm-8'>
                        <input type='text'
                               className='form-control'
                               ref='roomName'
                               placeholder='Room name'
                               value={rooms[roomId].name}/>
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'>Description:</label>
                    <div className='col-sm-8'>
                        <textarea className='form-control'
                                  rows='10'
                                  cols='10'
                                  ref='roomDescription'
                                  placeholder='Description'
                                  value={rooms[roomId].description}/>
                    </div>
                </div>
                <div className='btn-toolbar'>
                    <Link to='/rooms' activeClassName='active'>
                        <h3><span className='label label-info' >Go back</span></h3>
                    </Link>
                    <botton className='btn btn-success'>Save</botton>
                </div>
            </form>
            {this.props.children}
        </div>
    }
}

const mapStateToProps = (state) => ({
    rooms: state.rooms.items
});

function mapDispatchToProps(dispatch) {
    return {
        saveRoomDetails: bindActionCreators(saveRoomDetails, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RoomDetails)
