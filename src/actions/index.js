import {ADD_ROOM, FILTER_BY_ROOM_NAME, SORT_BY_ROOM_NAME} from '../constants/ActionTypes';

let rootId = 5;
export function addRoom(name) {
    return (dispatch) => {
        let id = rootId++;
        dispatch({
            type: ADD_ROOM,
            payload: {
                room: {
                    [id]: {
                        id: id,
                        name: name,
                        description: 'Пока что нету описания',
                        userIds: []
                    }
                },
                filterRoom: ''
            }
        });
        dispatch({
            type: SORT_BY_ROOM_NAME,
            payload: {}
        });
    }
}

export function filterByRoomName(name){
    return (dispatch) => {
        dispatch({
            type: FILTER_BY_ROOM_NAME,
            payload: {
                name: name
            }
        })
    }
}

