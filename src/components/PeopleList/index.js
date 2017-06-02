import React from 'react'
import PropTypes from 'prop-types'

const PeopleList = ({roomId, children, state}) => {

    let title = (null === roomId) ? 'No room selected' : state.rooms[0].name;
    return (
        <div>
            <div className='header'>
                <div className='text-center'>
                    <h3>{title}</h3>
                </div>
                {null === roomId ?
                    <form className='form-inline'>
                        <div className='form-group'>
                            <input className='form-control' type='text' placeholder='user name'/>
                        </div>
                        <button className='btn btn-primary' type='submit'>Add</button>
                    </form> : ''
                }
            </div>
            <div>{children}</div>
        </div>
    )
}

PeopleList.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
}

export default PeopleList
