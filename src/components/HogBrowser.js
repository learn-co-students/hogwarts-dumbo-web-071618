import React from 'react';
import HogCard from './HogCard.js'

const HogBrowser = (props) => {
	const generateHogs = () => {
		return props.hogs.map( hog => {
			return (
				<HogCard hog={hog} className="ui eight wide column" />
			)
		})
	}
	
	return (
		<div className = "ui grid container">
			{generateHogs()}
		</div>
	);
}

export default HogBrowser;
