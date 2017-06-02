import React, {Component} from 'react'
import * as UserActions from '../../actions/UserActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class LoginPage extends Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.actions.login({name: e.target.elements[0].value})
    }
    render() {
        return (
            <div className='row'>
                <div className='col-md-6 col-md-offset-4 login-form'>
                    <form  onSubmit={::this.handleSubmit} className='form-horizontal text-center'>
                        <div className='form-group'>
                            <input className='form-control' type='text' placeholder='login'/>
                        </div>
                        <div className='form-group'>
                            <input className='form-control' type='password' placeholder='password'/>{' '}
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-warning' type='submit'>Войти</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(UserActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)