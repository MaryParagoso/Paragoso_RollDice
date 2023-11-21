import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'

class Die extends Component {
    render() {
        const { face, rolling } = this.props
        return (
            <div className='container'>
                <FontAwesomeIcon icon={['fas', `fa-dice-${face}`]}
                className={`Die ${rolling && 'Die-shaking'}`} />
            </div >
        )
    }
}

export default Die;