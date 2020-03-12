import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import CreatePlot from './CreatePlot'

const AddPlot = (props) => (
<Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>Add New Plot</Card.Header>
        <Card.Meta>meta info</Card.Meta>
        <Card.Description>
        <strong>Create a new Card</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
            < CreatePlot getPlots={props.getPlots}/>
          
            
        </div>
      </Card.Content>
    </Card>
)

export default AddPlot;