import React, {Component} from 'react'
import {connect} from 'react-redux'

class RoomDetails extends Component {
    render() {

        return <div>
            <form>
                <div className='row'>
                    <div className='col-md-6 form-group'>
                        <p><h3><span className='label label-info'>ROOM DETAILS</span></h3></p>
                    </div>
                    <div className='com-md-6 form-group'>
                        <button className='btn btn-danger'>Delete room</button>
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'>Name:</label>
                    <div className='col-sm-8'>
                        <input type='text' className='form-control' placeholder='Room name'/>
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'>Description:</label>
                    <div className='col-sm-8'>
                        <textarea className='form-control' rows='10' cols='10' placeholder='Description'/>
                    </div>
                </div>
                <botton>Go back</botton>
                <botton>Save</botton>

            </form>
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
