import { browserHistory } from 'react-router'
import { ROUTING } from '../constants/Routing'

const redirect = store => next => actoin => { //eslint-disable-line no-unused-vars
    if (actoin.type === ROUTING) {
        browserHistory[actoin.payload.method](actoin.payload.nextUrl)
    }

    return next(actoin)
}
export default redirect;