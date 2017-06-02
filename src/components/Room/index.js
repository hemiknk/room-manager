import React, {Component} from 'react'

export default class Room extends Component {

    render() {
        return (
            <div className='room-item'>
                <li>{this.props.rooms} </li>
            </div>
        )
    }
}