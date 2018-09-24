import React, { Component } from 'react';
import Back from './Back'
import Front from './Front'

class HogCard extends Component {
	state = {front: true}

	handleClick = () => {
		this.setState(prevState => {
			return {front: !prevState.front}
		}, () => this.renderSide())
	}
	renderSide = () => {
		if (this.state.front) {
			return <Front hog={this.props.hog}/>
		} else {
			return <Back hog={this.props.hog}/>
		}
	}
	render() {
		return (
			<div className="ui card" onClick={this.handleClick}>
				{this.renderSide()}
			</div>
		);
	}
}

export default HogCard;

