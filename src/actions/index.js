import {ADD_ROOM, FILTER_BY_ROOM_NAME, SORT_BY_ROOM_NAME} from '../constants/ActionTypes';

let rootId = 5;
export function addRoom(name) {
    return (dispatch) => {
        let id = rootId++;
        dispatch({
            type: ADD_ROOM,
            payload: {
                [id]: {
                    id: id,
                    name: name,
                    description: 'Пока что нету описания',
                    userIds: []
                }
            }
        });
        dispatch({
            type: SORT_BY_ROOM_NAME,
            payload: {}
        });
    }
}

function filterBy(data, field, value) {
    return data.filter(item => item[field].toLowerCase().indexOf(value) !== -1);
}

export function filterByRoomName(name){
    return (dispatch) => {
        dispatch({
            type: FILTER_BY_ROOM_NAME,
            payload: filterBy(this.props.rooms.items, 'name', name)
        })
    }
}

