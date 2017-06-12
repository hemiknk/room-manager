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
        5: {
            id: 5,
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
        default:
            return state;
    }
}