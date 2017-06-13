import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'


export default class RoomItem extends Component {
    render() {
        return (
            <div onClick={this.props.onRoomClick}>
                <p><span className='label label-success'>Назваине:</span> {this.props.name}
                    {'   '}<span className='badge'>{this.props.countPeople}</span>{'   '}
                    <Link to={'/details/' + this.props.dataId} activeClassName='active'>
                        <span className='glyphicon glyphicon-arrow-right' />
                    </Link>
                </p>
                <p ><span className='label label-info'>Описание:</span> {this.props.description}</p>

                <hr/>
            </div>
        )
    }
}

RoomItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    countPeople: PropTypes.number.isRequired,
    onRoomClick: PropTypes.func.isRequired
}