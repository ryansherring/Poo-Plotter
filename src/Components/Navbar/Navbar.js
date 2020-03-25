import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Register from './Auth/Signup';
import Login from './Auth/Login';

export default class Navbar extends Component {
  state = {
    // sets default active item
    activeItem: 'profile'
  }
  // passes props to the navbar - e=event
  handleItemClick = (e, props) => this.setState({ activeItem: props.name })

  render = props => {
    //console.log(this.props)
    const { activeItem } = this.state
    return (
      <Menu inverted style={{ marginBottom: '0px' }}>
        <Menu.Item header to='/'>
          <Link to='/' ><h3>PooPlotter</h3></Link>
          </Menu.Item>
        <Menu.Menu position='right'>
          {this.props.currentUser ? (
            <>
              <Menu.Item
                name='profile'
                onClick={this.handleItemClick}
              >
                <Link to='/profile'>Profile</Link>
              </Menu.Item>

              <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={this.props.logout}
              >
              </Menu.Item>
            </>
          ) : (
              <>
                <Menu.Item>
                  < Register />
                </Menu.Item>
                <Menu.Item>
                  < Login setCurrentUser={this.props.setCurrentUser} />
                </Menu.Item>
              </>
            )}

        </Menu.Menu>
      </Menu>

    )
  }
}