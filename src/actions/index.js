import {
    ADD_ROOM, DELETE_USER_FROM_ROOM, FILTER_BY_ROOM_NAME, ON_ADD_USER_TO_ROOM, ON_ROOM_SELECTED, ON_USER_NAME_CHANGED,
    SORT_BY_ROOM_NAME
} from '../constants/ActionTypes';

let rootId = 7;
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

export function filterByRoomName(name) {
    return (dispatch) => {
        dispatch({
            type: FILTER_BY_ROOM_NAME,
            payload: {
                name: name
            }
        })
    }
}

export function onRoomClick(id) {
    return (dispatch) => {
        dispatch({
            type: ON_ROOM_SELECTED,
            payload: {
                roomId: id
            }
        })
    }
}

export function onNameChanged(userName, id) {
    return (dispatch) => {
        dispatch({
            type: ON_USER_NAME_CHANGED,
            payload: {
                id,
                firstName: userName
            }
        })
    }
}

export function deleteUserFromRoom(userId, roomId) {
    return (dispatch) => {
        dispatch({
            type: DELETE_USER_FROM_ROOM,
            payload: {
                userId,
                roomId
            }
        })
    }
}

export function addUserToRoom(userName, roomId) {
    return (dispatch) => {
        let id = rootId++;
        dispatch({
            type: ON_ADD_USER_TO_ROOM,
            payload: {
                user: {
                    [id]: {
                        id: id,
                        firstName: userName,
                        lastName: '',
                        room: roomId
                    }
                },
                id: id
            }
        })
    }
}
