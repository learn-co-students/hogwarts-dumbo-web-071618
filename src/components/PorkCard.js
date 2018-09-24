import React, { Component } from 'react'
import Pork  from './Pork.js'
import PorkBack from './PorkBack.js'

export default class PorkCard extends Component {
    state = {
        showFront: true
    }

    handleMouseOver = () => {
        this.setState((prevState) => {
            return {showFront: !prevState.showFront}
        })
    }


    render () {
        return (
            <div>
                {this.state.showFront ? <Pork handleMouseOver={this.handleMouseOver} hog={this.props.hog}/>  : <PorkBack handleMouseOver={this.handleMouseOver} hog={this.props.hog}/>}
            </div>
        )
    }
}