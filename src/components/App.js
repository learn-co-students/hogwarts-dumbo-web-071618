import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogBrowser from './HogBrowser'
import Filters from './Filters'

class App extends Component {

	constructor(){
		super()
		this.state = {
			hogs: hogs,
			filter: '',
			sortBy: ''
		}
	}

	applyPref = (stateObj) => {
		this.setState(stateObj, () => {
			this.setState({
				hogs: this.getHogs()
			}, () => console.log(this.state))
		})
	} 

	getHogs = () => {
		let assortedHogs = []

		if (!this.state.filter){
			assortedHogs = hogs
		} else {
			assortedHogs = hogs.filter( hog => {
				return this.state.filter === 'greased' ? hog.greased : !hog.greased
			}) 
		}

		return this.sortHogs(assortedHogs)
	}

	sortHogs = (hogs) => {
		if (this.state.sortBy){
			return hogs.sort( (hog1,hog2) => {
				return this.state.sortBy === "weight" ? hog1[this.state.sortBy] - hog2[this.state.sortBy] : hog1[this.state.sortBy].localeCompare(hog2[this.state.sortBy])
			})
		} else {
			return hogs
		}
	}

	componentDidMount() {
		console.log(this.state)
	}

	render() {
		return (
		<div className="App">
			< Nav />
			<Filters applyPref={this.applyPref} /> <br />
			<HogBrowser hogs = {this.state.hogs}/>
		</div>
		)
	}
}

export default App;
