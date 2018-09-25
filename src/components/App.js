import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigPenFront from '../containers/PigPenFront'
import PigPenBack from '../containers/PigPenBack'
import 'semantic-ui-css/semantic.min.css';


class App extends Component {

  state={
    hogs: hogs
  }

  onHandleClick = (hog) =>{
    console.log(hog);
  }

  handleNameSort = ()=>{
    this.setState({hogs: hogs.sort(function(a,b){return a.name.localeCompare(b.name) })})
  }

  handleWeightSort = () => {
    let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    this.setState({hogs: hogs.sort(function(a,b){return a[weight] - b[weight] })})
  }

  handleGreasedFilter = () => {
    this.setState({hogs: hogs.filter(hog => hog.greased) })
  }

  render() {
    return (
        <div className="App">
          <Nav />
          <button onClick={this.handleNameSort} >Name Sort</button>
          <button onClick={this.handleWeightSort} >Weight Sort</button>
          <button onClick={this.handleGreasedFilter} >Grease Filter</button>
          <div className= "ui fade reveal">
            <PigPenFront hogs={this.state.hogs} handleClick={(hog)=>this.onHandleClick(hog)} />
            <PigPenBack  hogs={this.state.hogs} handleClick={(hog)=>this.onHandleClick(hog)} />
          </div>
        </div>
    )
  }
}

export default App;
