import React from 'react'
import { Card, Header } from 'semantic-ui-react'
import PlotContainer from './PlotCards/PlotContainer'


const Home = () => (
  
  <>
  <Header style={{ marginBottom: '5vh', textAlign: 'center', background: 'lightBlue', padding: '20px'}}>
  <h1>Hey there, farmer!</h1>
  <h3>These are your current gardens. Let's get into it!</h3>
  </Header>
  
  <Card.Group centered>
    <PlotContainer />    
  </Card.Group>
  </>
)
export default Home




