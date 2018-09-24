import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.youtube.com/watch?v=rLqSORsrF2k">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<span>
				<select onChange={props.sortByType}>
					<option value="all">Show All Pigs!</option>
					<option value="name">Sort By Name</option>
					<option value="weight">Sort By Weight</option>
					<option value="greased">Filter By Greased</option>
				</select>
			</span>
		</div>
	)
}

export default Nav
