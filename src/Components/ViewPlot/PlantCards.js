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
        //   console.log(res);
          this.setState({
            plants: res.data.data,
          })
        })
        .catch(err => {
          console.log(err);
        })
      }

     
    render() {
        let plants = null;
        if(this.state.plants){
            plants = this.state.plants.map(plant => {
                return (
                    <Card.Group>
                        <Card>
                            <Card.Header textAlign="center">
                                <h3><strong>{plant.plantName}</strong></h3>
                            </Card.Header>
                            <Card.Meta></Card.Meta>
                            <Card.Description textAlign="center">
                                <p>Quantity: <strong>{plant.quantity}</strong></p>
                                <p>PH desired: {plant.ph}</p>
                                <p>Temp desired: {plant.temp}</p>
                                <p>Time to Maturity:{plant.growthTime}</p>
                            </Card.Description>
                            <Card.Content className='ui two buttons'>
                                <Button basic color='green' onClick={() => this.props.addPlantToPlot(plant._id)}>+</Button>
                                <Button basic color='red' onClick={()=>this.props.removePlantFromPlot(plant._id)}>-</Button>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                )
            })
        }
        
        return (
                <>
                {plants}
                </>
            )        
        
    }
}

export default PlantCards;