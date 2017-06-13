import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class PeopleItem extends Component {
    render() {
        return (
            <div>
                <p><span className='label label-success'>Имя:</span> {this.props.firstName} <span className='label label-primary'>Фимилия:</span> {this.props.lastName}</p>
                <hr/>
            </div>
        )
    }
}

PeopleItem.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
};

