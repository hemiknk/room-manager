import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS
} from './../constants/User'

const initialState = {
    name: 'Vasi'
}

export default function userstate(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            //TODO
            return {}
        case LOGIN_SUCCESS:
            return {...state, name: action.payload.name, isAuthenticated: action.payload.isAuthenticated}
        case LOGIN_FAIL:
            break;
        case LOGOUT_SUCCESS:
            //TODO
            return {}
        default:
            return state
    }
}