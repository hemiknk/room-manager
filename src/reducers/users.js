import {ON_ADD_USER_TO_ROOM} from '../constants/ActionTypes';
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
        default:
            return state;
    }
}

function addUserToRoom(state, payload) {
    return Object.assign({}, state.items, payload.user);
}