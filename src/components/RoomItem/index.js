import React from 'react'
import PropTypes from 'prop-types'

const RoomItem = ({ name, description}) => (
    <div>
        <p>Назваине: {name} Описание: {description}</p><a href='#'>Подробне</a>
        <hr/>
    </div>

);

RoomItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default RoomItem
