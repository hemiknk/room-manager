import {ADD_ROOM, FILTER_BY_ROOM_NAME} from '../constants/ActionTypes';
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
            userIds: [4]
        }
    },
    roomId: 2,
    year: 2016,
    photos: [],
    fetching: false
};

export default function rooms(state = initialState, action) {
    switch (action.type) {
        case ADD_ROOM:
            return { ...state, items: addRoomToItems(state, action) };
        case FILTER_BY_ROOM_NAME:
            return { ...state, items: action.payload };
        default:
            return state;
    }
}

function addRoomToItems(state, action) {
    let items = state.items;
    return Object.assign({}, items, action.payload);

}