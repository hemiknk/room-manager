import React, { Component } from 'react'
// import Rooms from '../Rooms'
import './styles.scss'

class App extends Component {
    render() {

        return <div className='col-md-offset-3'>
            {this.props.children}
        </div>
    }
}


export default App