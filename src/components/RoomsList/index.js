import React from 'react'
import PropTypes from 'prop-types'

const RoomsList = ({ title, children, onAddRoomClicked }) => (
    <div>
        <div className='header'>
            <div className='text-center'>
                <h3>{title}</h3>
            </div>
            <form className='form-inline' onSubmit={onAddRoomClicked}>
                <div className='form-group'>
                    <input className='form-control' type='text' placeholder='room name'/>
                </div>
                <button className='btn btn-primary' type='submit'>Add</button>
            </form>
        </div>
        <div>{children}</div>
    </div>
)

RoomsList.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
}

export default RoomsList
