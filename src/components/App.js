import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PorkCard from './PorkCard';
import Filter from './Filter';

class App extends Component {
  constructor(){
    super()
    this.state = { 
      hogs: [],
      sortBy: 'all',
      greased: false
    }
  }
  
  componentDidMount() {
    this.setState({hogs: hogs})
  }

  renderPorkCards() {
    const newList = this.sortByTerm()

    return newList.map(hog => {
      return <PorkCard hog={hog}/>
    })
  }

  handleGreased = () => {
    this.setState(prevState => ({greased: !prevState.greased}))
  }

  filterByGreased = () => {
    if(this.state.greased){
      return hogs.filter(hog => hog.greased)
    }else{
    return hogs
  }
}

  handleSearchTerm = (e) => {
    const term = e.target.value
    this.setState({sortBy: term})
  }

  sortByTerm = () => {
    const currentHogs = this.filterByGreased()

    if (this.state.sortBy === 'name') {
      return currentHogs.sort((a,b) => {
        return a.name.localeCompare(b.name)
      })
    }else if(this.state.sortBy === 'weight') {
      return currentHogs.sort((a,b) => {
        return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      })
    }else{
      return hogs
    }
  }

  render() {
    console.log("Greg", this.state)
    return (
      <div className="App navWrapper filterWrapper" >
          < Nav/>
          <div>
          < Filter handleGreased={this.handleGreased} handleSearchTerm={this.handleSearchTerm}/>

            </div> 
        <div className='ui grid container'>
            {this.renderPorkCards()}
        </div>
      </div>
    )
  }
}

export default App;