import React, {Component} from 'react';
import { Button, Card } from 'semantic-ui-react';
import axios from 'axios'

class PlantCards extends Component {
    state = {
        plants: []
    }

    componentDidMount() {
        this.getPlants();
      }
    
      getPlants = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/plants/all`)
        .then(res => {
          console.log(res);
          this.setState({
            plants: res.data.data,
          })
        })
        .catch(err => {
          console.log(err.response);
        })
      }


    
    render() {
        let plants =  this.state.plants.map(plant => {
        return (
            <Card.Group>
                <Card>
                    <Card.Header>
                        <strong>{plants.plant.name}</strong>
                    </Card.Header>
                    <Card.Meta></Card.Meta>
                    <Card.Description>
                        <p><strong>{plant.quantity}</strong></p>
                        <p>PH desired:{plant.ph}</p>
                        <p>Temp desired: {plant.temp}</p>
                        <p>Time to Maturity:{plant.growthTime}</p>
                    </Card.Description>
                    <Card.Content>
                        <Button basic color='green'>+</Button>
                        <Button basic color='red'>-</Button>
                    </Card.Content>

                </Card>
            </Card.Group>
        )}
    )
    return (
        <>
            {plants}
        </>
    )}
}

export default PlantCards;