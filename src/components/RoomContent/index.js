import React, {Component} from 'react'
import Room from '../Room'

export default class RoomContent extends Component {
    render() {
        return (
            <div className='col-md-4 rooms'>
                <div className='rooms-content'>
                    <p>{this.props.year}</p>
                    <ul>
                        <Room />
                    </ul>
                </div>

            </div>
        )
    }
}