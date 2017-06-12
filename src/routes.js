import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import App from './containers/App'
import RoomDetails from './containers/RoomDetails'
import NotFound from './components/NotFound'
import LoginPage from './components/LoginPage'
import Rooms from './containers/Rooms'
// import requireAuthentication from './containers/AuthenticatedComponent'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRedirect to='/login' />
            <Route path='/login' component={LoginPage} />
            <Route path='/details/:roomId' component={RoomDetails}/>
            <Route path='/rooms' component={Rooms} >
                <Route path='/rooms/:roomId' component={Rooms} />
            </Route>
        </Route>
        <Route path='*' component={NotFound} />
    </div>
)