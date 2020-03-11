import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import { Nav, Form, FormControl, Button} from 'react-bootstrap';
// import Signup from './Auth/Signup';
// import App from '../../App'


class Navbar extends Component {
  state = {
    // sets default active item
    activeItem: 'profile'
  }
  // passes props to the navbar - e=event
  handleItemClick = (e, props) => this.setState({ activeItem: props.name })

  render = props => {
    console.log(this.props)
    //const { activeItem } = this.state
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link to="/signup">Sign up!</Nav.Link>
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <br />
      </>
    )
  }
}
export default Navbar;