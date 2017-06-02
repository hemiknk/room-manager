import React, { Component } from 'react'

export default class People extends Component {
    render() {
        return (
            <div className='col-md-4 people-content'>
                <ul>
                    <li>Человек 1</li>
                    <li>Человек 2</li>
                    <li>Человек 3</li>
                </ul>
            </div>
        )
    }
}