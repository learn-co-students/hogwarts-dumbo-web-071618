import React, { Component } from 'react';

class Filters extends Component {

	state = {
		sortBy: '',
		filter: ''
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.applyPref(this.state)
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		},() => console.log(this.state))
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Sort By:</label>
					<select name="sortBy" onChange={this.handleChange}>
						<option value="">None</option>
						<option value="name">Name</option>
						<option value="weight" >Weight</option>
					</select>

					<label> Filter By: </label>
					<select name="filter" onChange={this.handleChange} >
						<option value="" >None</option>
						<option value="greased" >Greased</option>
						<option value="not greased" >Not Greased</option>
					</select>

					<input type="submit" value="Apply Preferences" />
				</form>
			</div>
		);
	}
}

export default Filters;
