import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const PorkBack = (props) => {
//     let slugify = require('slugify')
 const {name, specialty, greased} = props.hog
//     const slugName = slugify(name.toLowerCase(), '_')
//    console.log(slugName)
return (
<Card onClick={props.handleMouseOver} className="ui eight wide column pigTile" >
<Image src={require(`../medals-img/${props.hog['highest medal achieved']}.jpg`)} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <Card.Description>{specialty}</Card.Description>
      </Card.Meta>
      <Card.Description>Weight is {props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]} lbs</Card.Description>
      <Card.Description>{greased ? <strong>Is Greased</strong> : <strong>Is not Greased</strong>}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Git Push Baby Hog
      </a>
    </Card.Content>
  </Card>
    )
}



export default PorkBack