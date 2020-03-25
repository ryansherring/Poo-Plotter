import React from 'react'
import { Card, } from 'semantic-ui-react'
import CreatePlot from './CreatePlot'

const AddPlot = (props) => (
<Card  min-width='10'>
      <Card.Content textAlign='center'>
        {/* <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        /> */}
        <Card.Header>Is that all?</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>
        <strong>Create a new Card here!</strong>
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