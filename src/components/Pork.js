import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Pork = (props) => {
    let slugify = require('slugify')
    const {name} = props.hog
    const slugName = slugify(name.toLowerCase(), '_')
   console.log(props)
  return (
  <Card onClick={props.handleMouseOver} className="ui eight wide column pigTile">
    <Image src={require(`../hog-imgs/${slugName}.jpg`)} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>{name} is a musician living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
    )
}



export default Pork