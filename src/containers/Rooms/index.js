import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import RoomItem from '../../components/RoomItem'
import RoomsList from '../../components/RoomsList'
import { addRoom, filterByRoomName } from '../../actions'
import PeopleList from '../../components/PeopleList'
import PeopleItem from '../../components/PeopleItem';
import {bindActionCreators} from 'redux'

class Rooms extends Component {
    render() {
        const {rooms, users, addRoom, filterByRoomName} = this.props;
        let roomKeys = Object.keys(rooms.items);
        return (
            <div className='row'>
                <div className='col-md-4 peoples'>
                    <PeopleList roomId={rooms.roomId}>
                        <ul>
                            {
                                users.items.map(user => {
                                        return <li><PeopleItem
                                            key={user.id}
                                            firstName={user.firstName}
                                            lastName={user.lastName}/></li>
                                    }
                                )}
                        </ul>
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
                                        name={room.name}
                                        description={room.description}/>
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

const mapStateToProps = (state) => ({
    rooms: state.rooms,
    users: state.users
});

function mapDispatchToProps(dispatch) {
    return {
        addRoom: bindActionCreators(addRoom, dispatch),
        filterByRoomName: bindActionCreators(filterByRoomName, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rooms)
