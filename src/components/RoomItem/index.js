import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class RoomItem extends Component {
    render() {
        return (
            <div>
                <p>Назваине: {this.props.name} Описание: {this.props.description}</p><a href='#'>Подробне</a>
                <hr/>
            </div>
        )
    }
}

RoomItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}