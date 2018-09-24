import React from 'react'
import HogTile from './HogTile'


const HogContainer = (props) => {

    return(
      <div className="card">
        <select onChange={props.sortByType}>
          <option value="">Show All Pigs!</option>
          <option value="name">Sort By Name</option>
          <option value="weight">Sort By Weight</option>
          <option value="greased">Filter By Greased</option>
        </select>

        <div className="ui link cards">
          {props.allHogs.map( hog => {
            return <HogTile thisHog={hog}  key={hog.name}/>
          })}
        </div>
      </div>
        )
}

export default HogContainer
