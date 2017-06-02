import React from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import RoomItem from '../../components/RoomItem'
import RoomsList from '../../components/RoomsList'
import PeopleList from '../../components/PeopleList'
import { addRoom } from '../../actions'

const Rooms = ({state}) => (
    <div className='row'>
        <div className='col-md-4 peoples'>
            <PeopleList roomId={state.roomId} state={state}>

            </PeopleList>
        </div>
        <div className='col-md-4 rooms'>
            <RoomsList title='Rooms'
                       onAddRoomClicked={() => addRoom }>
                <ul>
                    {state.rooms.map(room => {
                            return <li><RoomItem
                                key={room.id}
                                name={room.name}
                                description={room.description}/></li>
                        }
                    )}
                </ul>
            </RoomsList>
        </div>
    </div>
);

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

const mapStateToProps = state => ({
    rooms: state.rooms.rooms,
    state: state.rooms
});

export default connect(mapStateToProps, { addRoom })(Rooms)
