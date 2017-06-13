import React, {Component} from 'react'
import PropTypes from 'prop-types'
import InlineEdit from 'react-edit-inline';

export default class PeopleItem extends Component {

    customValidateText(text) {
        return (text.length > 0 && text.length < 64);
    }

    dataChanged(data) {
        console.log(data.userName)
        this.props.onNameChanged(data.userName, this.props.userId)
    }

    render() {
        return (
            <li>
                <p><span className='label label-success'>Имя:</span>
                    <InlineEdit
                        validate={this.customValidateText}
                        activeClassName='editing'
                        text={this.props.firstName}
                        paramName='userName'
                        change={::this.dataChanged}
                        style={{
                            minWidth: 120,
                            maxWidth: 120,
                            display: 'inline-block',
                            margin: 0,
                            padding: 0,
                            fontSize: 15,
                            outline: 0,
                            border: 0
                        }}
                    />
                    {this.props.lastName} ( {this.props.room} )<span className='glyphicon glyphicon-remove-sign' onClick={this.props.deleteUserFromRoom}/>
                </p>
                <hr/>
            </li>
        )
    }
}

PeopleItem.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    onNameChanged: PropTypes.func.isRequired,
    deleteUserFromRoom: PropTypes.func.isRequired,
    userId: PropTypes.number.isRequired
};

