import React from 'react';

const Back = ({hog: {specialty, greased, weight, highestMedal}}) => {
	return (
		< div className = "content" >
			<p>Specialty: {specialty} </p>
			<p>{ greased ? "Greased" : "Not Greased" } </p>
			<p>Weight: {weight} </p>
			<p>Highest Medal Achievement: {highestMedal} </p>
		</div>
	);
}

export default Back;
