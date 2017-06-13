import {ON_ADD_USER_TO_ROOM, ON_USER_NAME_CHANGED} from '../constants/ActionTypes';
const initialState = {
    items: {
        10: {
            id: 10,
            firstName: 'Вася',
            lastName: 'Пупкин'
        },
        1: {
            id: 1,
            firstName: 'Сергей',
            lastName: 'Петров'
        },
        2: {
            id: 2,
            firstName: 'Роман',
            lastName: 'Викторов'
        },
        3: {
            id: 3,
            firstName: 'Лера',
            lastName: 'Минкина'
        },
        4: {
            id: 4,
            firstName: 'Женя',
            lastName: 'Одинцова'
        }
    },
    fetching: false
};

export default function users(state = initialState, action) {

    switch (action.type) {
        case ON_ADD_USER_TO_ROOM:
            return { ...state, items: addUserToRoom(state, action.payload) };
        case ON_USER_NAME_CHANGED:
            return { ...state, items: changeUserName(state, action.payload)};
        default:
            return state;
    }
}

function addUserToRoom(state, payload) {
    return Object.assign({}, state.items, payload.user);
}

function changeUserName(state, payload) {
    let user = state.items[payload.id];
    user.firstName = payload.firstName;
    return Object.assign({}, state.items, user);
}