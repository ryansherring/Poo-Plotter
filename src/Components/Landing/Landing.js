import React, {Component} from 'react';
import {Container, Grid, Header} from 'semantic-ui-react'


class Landing extends Component {

  render(){
    return(
      <>
  <Grid inverted style={{background: 'gray', height: '93vh'}}>
    <Container text>
    <Header
      as='h1'
      content='PooPlotter'
      
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
      }}
    />
    <Header
      as='h3'
      content='This app will help you plan out your Aquaponic Garden. Sign up and log in in the nav now!'
      
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}
    />
  </Container>
  </Grid>
      </>
    )
  }
  
}

export default Landing;