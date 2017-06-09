import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as ReactDOM from 'react-dom';

export default class RoomsList extends Component {
    handleOnAddRoomClick(e) {
        e.preventDefault();
        let roomField = ReactDOM.findDOMNode(this.refs.roomName);
        if (!roomField.value.trim()) {
            return
        }
        this.props.onAddRoomClicked(roomField.value);
        roomField.value = '';
    }

    handleInputOnRoomName(e) {
        let roomName = e.target.value.trim();
        this.props.filterByRoomName(roomName);
    }

    render() {
        const title = this.props.title;
        const children = this.props.children;
        return (
            <div>
                <div className='header'>
                    <div className='text-center'>
                        <h3>{title}</h3>
                    </div>
                    <form className='form-inline' onSubmit={::this.handleOnAddRoomClick}>
                        <div className='form-group'>
                            <input
                                className='form-control'
                                type='text'
                                placeholder='room name'
                                ref='roomName'
                                onChange={ ::this.handleInputOnRoomName }/>
                        </div>
                        <button className='btn btn-primary' type='submit'>Add</button>
                    </form>
                </div>
                <div>{children}</div>
            </div>
        );
    }
}

RoomsList.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    onAddRoomClicked: PropTypes.func.isRequired
}
