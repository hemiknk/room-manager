import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as ReactDOM from 'react-dom';

export default class PeopleList extends Component {
    handleOnAddUserToRoomClicked(e) {
        e.preventDefault();
        let userName = ReactDOM.findDOMNode(this.refs.userName);
        if (!userName.value.trim()) {
            return
        }
        this.props.onAddUserToRoomClicked(userName.value.trim(), this.props.roomId);
        userName.value = '';
    }

    render() {
        let {roomExistInAfterFilter, children, title} = this.props;
        return (
            <div>
                <div className='header'>
                    <div className='text-center'>
                        <h3>{title}</h3>
                    </div>
                    {roomExistInAfterFilter ?
                        <form className='form-inline' onSubmit={::this.handleOnAddUserToRoomClicked}>
                            <div className='form-group'>
                                <input className='form-control'
                                       type='text'
                                       placeholder='user name'
                                       ref='userName'
                                />
                            </div>
                            <button className='btn btn-primary' type='submit'>Add</button>
                        </form> : ''
                    }
                </div>
                <div>{children}</div>
            </div>
        )
    }
}

PeopleList.propTypes = {
    children: PropTypes.node,
    roomId: PropTypes.number,
    title: PropTypes.string.isRequired,
    onAddUserToRoomClicked: PropTypes.func.isRequired
}