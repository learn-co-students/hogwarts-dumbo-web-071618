import React from 'react';

const Front = ({hog: {name, image}}) => {
	return (
		< div className="content">
			<p>Name: {name} </p>
			<div className="image">
				<img src = {require("../hog-imgs/" + image)} alt="" />
			</div>
		</div>
	);
}

export default Front;
