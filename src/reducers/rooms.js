const initialState = {
    rooms: [
        {
            id: 0,
            name: 'Малая комната',
            description: 'Крутая комната 1',
            userIds: [3, 1]
        },
        {
            id: 1,
            name: 'Южная комната',
            description: 'Супер комната',
            userIds: [0, 2]
        },
        {
            id: 2,
            name: 'Просто кмната',
            description: 'Комната без окон',
            userIds: [4]
        }
    ],
    roomId: 2,
    year: 2016,
    photos: [],
    fetching: false
};

export default function rooms(state = initialState, action) {

    switch (action.type) {
        default:
            return state;
    }
}