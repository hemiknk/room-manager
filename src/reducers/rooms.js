/**
 * @returns Array
 */
import {
    ADD_ROOM, FILTER_BY_ROOM_NAME, ON_ROOM_SELECTED, SHOW_ROOM_DETAIL,
    SORT_BY_ROOM_NAME
} from '../constants/ActionTypes';
import sortBy from 'sort-by';

const initialState = {
    items: {
        4: {
            id: 4,
            name: 'Малая комната',
            description: 'Крутая комната 1',
            userIds: [3, 1]
        },
        1: {
            id: 1,
            name: 'Южная комната',
            description: 'Супер комната',
            userIds: [0, 2]
        },
        2: {
            id: 2,
            name: 'Просто кмната',
            description: 'Комната без окон',
            userIds: [4,1,3]
        }
    },
    roomId: null,
    year: 2016,
    photos: [],
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
            return { ... state, roomId: action.payload.roomId };
        case SHOW_ROOM_DETAIL:
        case SORT_BY_ROOM_NAME:
        default:
            items = sortRoomsByName(items);
            return { ...state,  items: items };
    }
}

function addRoomToItems(state, action) {
    let items = state.items;
    return Object.assign({}, items, action.payload.room);
}

function sortRoomsByName(items) {
    let arrayItems = getObjectToArray(items);
    return arrayItems.sort(sortBy('name'));
}

function getObjectToArray(object) {
    return Object.keys(object).map(function (value) {
        return object[value];
    });
}