import React from 'react'
import HogTile from './HogTile'


const HogContainer = (props) => {
    return(
        <div className="ui link cards">
          {props.allHogs.map( hog => {
            return <HogTile thisHog={hog} key={hog.name} isThisPigHidden={props.isThisPigHidden}/>
          })}
        </div>
        )
}

export default HogContainer
