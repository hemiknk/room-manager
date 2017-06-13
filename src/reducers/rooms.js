/**
 * @returns Array
 */
import {
    ADD_ROOM, DELETE_USER_FROM_ROOM, FILTER_BY_ROOM_NAME, ON_ADD_USER_TO_ROOM, ON_ROOM_SELECTED, SORT_BY_ROOM_NAME
} from '../constants/ActionTypes';
import sortBy from 'sort-by';

const initialState = {
    items: {
        4: {
            id: 4,
            name: 'Четвертая Малая комната',
            description: 'Крутая комната 1',
            userIds: [3, 1]
        },
        1: {
            id: 1,
            name: 'Первая Южная комната',
            description: 'Первая Супер комната',
            userIds: [4, 2]
        },
        2: {
            id: 2,
            name: 'Вторая Просто кмната',
            description: 'Вторая Комната без окон',
            userIds: [10]
        }
    },
    roomId: null,
    filterRoom: '',
    fetching: false
};

export default function rooms(state = initialState, action) {
    let { ...items } = state.items;

    switch (action.type) {
        case ADD_ROOM:
            return { ...state, items: addRoomToItems(state, action), filterRoom: action.payload.filterRoom };
        case FILTER_BY_ROOM_NAME:
            return { ...state,  filterRoom: action.payload.name };
        case ON_ROOM_SELECTED:
            return { ...state, roomId: action.payload.roomId };
        case ON_ADD_USER_TO_ROOM:
            return {...state, items: addUserToRoom(state, action.payload)};
        case DELETE_USER_FROM_ROOM:
            return {...state, items: deleteUserFromRoom(state, action.payload)};
        case SORT_BY_ROOM_NAME:
        default:
            items = sortRoomsByName(items);
            return { ...state,  items: items };
    }
}

function addUserToRoom(state, payload){
    let roomItem = state.items[state.roomId];
    roomItem.userIds.push(payload.id);
    return Object.assign({}, state.items, {[state.roomId]: roomItem});
}

function deleteUserFromRoom(state, payload) {
    let roomItem = state.items[state.roomId];
    let index = roomItem.userIds.indexOf(payload.userId);
    if (index > -1) {
        roomItem.userIds.splice(index, 1);
    }
    return Object.assign({}, state.items, {[state.roomId]: roomItem});
}

function addRoomToItems(state, action) {
    let items = state.items;
    return Object.assign({}, items, action.payload.room);
}

function sortRoomsByName(items) {
    let arrayItems = getObjectToArray(items);
    let roomsObject = {};
    arrayItems.sort(sortBy('name')).map(function (value) {
        roomsObject[value.id] = value;
    });
    return roomsObject;
}

function getObjectToArray(object) {
    return Object.keys(object).map(function (value) {
        return object[value];
    });
}