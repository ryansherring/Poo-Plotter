import React, {Component} from 'react'
import {Jumbotron} from 'react-bootstrap'


class Description extends Component {
    render(){
        return(
            <Jumbotron>
                <h1>Welcome to Poo Plotter!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
            </Jumbotron>
        )
    }
}

export default Description;