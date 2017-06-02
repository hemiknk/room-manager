import React from 'react'
import {connect} from 'react-redux'
import {ROUTING} from '../../constants/Routing'

export default function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount() {
            this.checkAuth(this.props.user)
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth(nextProps.user)
        }

        checkAuth(user) {
            if (!user.isAuthenticated) {
                this.props.dispatch({
                    type: ROUTING,
                    payload: {
                        method: 'replace',
                        nextUrl: '/login'
                    }
                })
            }
        }

        render() {
            return (
                <div>
                    {this.props.user.isAuthenticated === true
                        ? <Component { ...this.props } />
                        : '403 Forbidden.'}
                </div>
            )
        }
    }

    function mapStateToProps(state) {
        return {
            user: state.user,
            users: state.users,
            roomId: state.roomId,
            rooms: state.rooms
        }
    }

    return connect(mapStateToProps)(AuthenticatedComponent)

}