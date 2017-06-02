const initialState = {
    rooms: [
        {
            id: 0,
            name: 'Малая комната',
            description: 'Крутая комната 1'
        },
        {
            id: 1,
            name: 'Южная комната',
            description: 'Супер комната'
        },
        {
            id: 2,
            name: 'Просто кмната',
            description: 'Комната без окон'
        }
    ],
    roomId: 1,
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