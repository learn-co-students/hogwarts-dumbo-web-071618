import React, { Component } from 'react';

 const PigPenBack = props =>
 <ul className="hidden content">
   {props.hogs.map(hog => (
   <li className="pigTile" onClick={()=>(props.handleClick(hog) ) }>
     <label>name:<h3>{hog.name}</h3></label>
     <label>specialty:<h3>{hog.specialty}</h3></label>
     <label>greased:<h3>{hog.greased.toString()}</h3></label>
     <label>weight:<h3>{hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h3></label>
     <label>medal:<h3>{hog['highest medal achieved']}</h3></label>
   </li>
 )
 )}
 </ul>

 export default PigPenBack
