import React, { Component } from 'react'
import { Link } from 'react-router'
import RoomContent from '../RoomContent'
import People from '../People'

export default class Rooms extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <People {...this.props} />
                        <RoomContent aa={this.props.rooms} {...this.props.rooms} />
                        Вернуться на <Link to='/'>главную</Link>?
                    </div>
                </div>
            </div>
        )
    }
}