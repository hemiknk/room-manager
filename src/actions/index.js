export const addRoom = (dispatch, name) => {
    dispatch({
        type: 'ADD_ROOM',
        payload: name
    })
};