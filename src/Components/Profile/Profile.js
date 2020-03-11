import React from 'react';
import { Segment } from 'semantic-ui-react';

const Profile = (props) => {
  
  return (
    <Segment inverted>
      <h1>{props.profile.name && props.profile.name.split(' ')[0]}'s Profile</h1>
      <p><strong>Email:</strong></p>
      <p>{props.profile.email}</p>
    </Segment>
  )
};

export default Profile;