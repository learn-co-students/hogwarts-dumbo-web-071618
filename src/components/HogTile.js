import React, { Component } from 'react'

class HogTile extends Component {

  constructor() {
    super();
    this.state = {
      show: true
    }
  }

  changeStateByApp = () => {
    this.setState({ show: true })
  }

  handleClick = (event) => {
     this.setState({show: false}, () =>
     {this.props.isThisPigHidden(
       () => this.changeStateByApp(),
       this.state
     )})
   }

  render() {
    return (
      <div>
        {this.state.show  ?
          <div className="card" >
            <div className="ui move reveal" >
              <div className="visible content">
                <div className="ui card">
                  <ul>
                    <img src={require("../hog-imgs/" + this.props.thisHog.name.split(" ").join("_").toLowerCase() + ".jpg")} alt=""/>
                    <li>{this.props.thisHog.name}</li>
                  </ul>
                </div>
              </div>
              <div className="hidden content">
                <div className="header">
                  <h1>{this.props.thisHog.name}</h1>
                </div>
                <div className="description">

                  <h3> {this.props.thisHog.specialty}</h3>
                  <h3> {this.props.thisHog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h3>
                  <h3> {this.props.thisHog["highest medal achieved"]}</h3>

                  <button onClick={e => {this.handleClick(e)}}> Hide This Pig! </button>

                </div>


              </div>
            </div>
          </div>
        : null}
      </div>

    )
  }
}

export default HogTile
