import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: [],
      getData: true
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    this.setState({hogs: hogs}, () => {
    })
  }

  sortByType = (event) => {
    this.setState({type: event.target.value})
    const type = event.target.value
    if (type === "name"){
      this.setState({hogs: this.sortByName(this.state.hogs)})
    } else if (type === "weight") {
      this.setState({hogs: this.sortByWeight(this.state.hogs)})
    } else if (type==="greased") {
      this.setState({hogs: this.filterByGrease(this.state.hogs)})
    } else if (type==="all"){
      this.getData()

    }
  }

  sortByName = (hogArray) =>{
    return hogArray.sort(function(a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  sortByWeight = (hogArray) =>{
    return hogArray.sort(function (a, b) {
      return a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"];
    });
  }

  filterByGrease = (hogArray) => {
    return hogArray.filter( hog => hog.greased)
  }

  isThisPigHidden = (changeStateByApp, currentTileState) => {
    return [changeStateByApp, currentTileState]
  }


  render() {
    return (
      <div className="App">
        < Nav sortByType={this.sortByType} />
        <HogContainer
          allHogs={this.state.hogs}
          sortByType={this.sortByType}
          isThisPigHidden={this.isThisPigHidden}/>
      </div>
    )
  }
}

export default App;
