import React, { Component } from 'react';


  const PigPenFront = (props) =>
  <ul className=" visible content">
    {props.hogs.map(hog => (
    <li className="pigTile" onClick={()=>(props.handleClick(hog) ) }>
      <h3>{hog.name}</h3>
      <img src={require(`../hog-imgs/${hog.name.toLowerCase().split(" ").join("_")}.jpg`)}/>
    </li>
  )
  )}
  </ul>

export default PigPenFront
