const initialState = {
    rooms: [
        {
            id: 0,
            firstName: 'Вася',
            lastName: 'Пупкин',
        },
        {
            id: 1,
            firstName: 'Сергей',
            lastName: 'Петров',
        },
        {
            id: 2,
            firstName: 'Роман',
            lastName: 'Викторов',
        },
        {
            id: 3,
            firstName: 'Лера',
            lastName: 'Минкина',
        },
        {
            id: 4,
            firstName: 'Женя',
            lastName: 'Одинцова',
        }
    ],
    fetching: false
};

export default function users(state = initialState, action) {

    switch (action.type) {
        default:
            return state;
    }
}