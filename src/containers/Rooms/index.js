import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import RoomItem from '../../components/RoomItem'
import RoomsList from '../../components/RoomsList'
import {addRoom, filterByRoomName, onRoomClick, addUserToRoom} from '../../actions'
import PeopleList from '../../components/PeopleList'
import PeopleItem from '../../components/PeopleItem';
import {bindActionCreators} from 'redux'

class Rooms extends Component {
    render() {
        const {rooms, users, addRoom, filterByRoomName, onRoomClick, addUserToRoomClick} = this.props;
        let roomKeys = Object.keys(rooms.items);
        let userKeys = Object.keys(users.items);
        let roomExistInAfterFilter = typeof rooms.items[rooms.roomId] === 'object';
        let title = roomExistInAfterFilter ? rooms.items[rooms.roomId].name :'No room selected';

        return (

            <div className='row'>
                <div className='col-md-4 peoples'>
                    <PeopleList
                        onAddUserToRoomClicked={addUserToRoomClick}
                        title={title}
                        roomExistInAfterFilter={roomExistInAfterFilter}>
                        <ol>
                            {roomExistInAfterFilter ?
                                userKeys.map(key => {
                                        let user = users.items[key];
                                        return <li><PeopleItem
                                            key={user.id}
                                            firstName={user.firstName}
                                            lastName={user.lastName}/></li>
                                    }
                                ) : ''
                            }
                        </ol>
                    </PeopleList>
                </div>
                <div className='col-md-4 rooms'>
                    <RoomsList title='Rooms' onAddRoomClicked={addRoom} filterByRoomName={filterByRoomName}>
                        <ul>
                            {roomKeys.map(key => {
                                let room = rooms.items[key];
                                return <li>
                                    <RoomItem
                                        key={room.id}
                                        dataId={room.id}
                                        name={room.name}
                                        description={room.description}
                                        countPeople={room.userIds.length}
                                        onRoomClick={() => onRoomClick(room.id)}/>
                                </li>
                            })
                            }
                        </ul>
                    </RoomsList>
                </div>
            </div>
        )
    }
}

/*
 Rooms.propTypes = {
 products: PropTypes.arrayOf(PropTypes.shape({
 id: PropTypes.number.isRequired,
 title: PropTypes.string.isRequired,
 price: PropTypes.number.isRequired,
 inventory: PropTypes.number.isRequired
 })).isRequired,
 addToCart: PropTypes.func.isRequired
 };
 */


function filterRoomByName(roomState) {
    return ('' === roomState.filterRoom) ? roomState.items : filterByName(roomState.items, roomState.filterRoom);
}

function filterByName(items, value) {
    let arrayItems = getObjectToArray(items);
    let result = [];
    arrayItems.map(function (object) {
        if (object.name.indexOf(value) !== -1) {
            result[object.id] = object;
        }
    });
    return result;
}

/**
 * @returns Array
 */
function getObjectToArray(object) {
    return Object.keys(object).map(function (value) {
        return object[value];
    });
}

function getUsers(state) {
    if (null === state.rooms.roomId) {
        return {};
    }
    let users = {};
    let roomId = state.rooms.roomId;
    let userIds = state.rooms.items[roomId].userIds;

    Object.keys(state.users.items).map(function (key) {
        if (-1 !== userIds.indexOf(Number(key))) {
            users[key] = state.users.items[key]
        }
    });
    return users;
}

const mapStateToProps = (state) => ({
    rooms: {...state.rooms, items: filterRoomByName(state.rooms)},
    users: {...state.users, items: getUsers(state)}
});

function mapDispatchToProps(dispatch) {
    return {
        addRoom: bindActionCreators(addRoom, dispatch),
        filterByRoomName: bindActionCreators(filterByRoomName, dispatch),
        onRoomClick: bindActionCreators(onRoomClick, dispatch),
        addUserToRoomClick: bindActionCreators(addUserToRoom, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rooms)
