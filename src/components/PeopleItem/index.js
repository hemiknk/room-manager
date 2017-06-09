import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class PeopleItem extends Component {
    render() {
        return (
            <div>
                <p>Имя: {this.props.firstName} Фимилия: {this.props.lastName}</p>
                <hr/>
            </div>
        )
    }
}

PeopleItem.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
};

