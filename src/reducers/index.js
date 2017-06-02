import {combineReducers} from 'redux'
import rooms from './rooms'
import userstate from './user'

export default combineReducers({
    rooms,
    userstate
})