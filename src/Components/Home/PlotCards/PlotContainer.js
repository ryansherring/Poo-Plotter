import React from "react";
import AddPlot from '../AddPlot/AddPlot'
import { Button, Card } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import axios from 'axios'

class PlotContainer extends React.Component {
  state = {
    plots: [],
    plotName: '',
    plotSize: '',
    plants: []
  };

  componentDidMount() {
    this.getPlots();
  }

  getPlots = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/plots/all`)
    .then(res => {
      console.log(res);
      this.setState({
        plots: res.data.data,
      })
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  deleteGarden = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/plots/${id}`, {withCredentials: true})
      .then(res => {
        console.log(res);
        this.getPlots();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.plots);
    let plots =  this.state.plots.map(plot => {
        return (
            <Card key={plot._id}>
                
                <Card.Content>
                <Card.Header>{plot.plotName}</Card.Header>
                <Card.Meta>IBC Media Garden</Card.Meta>
                <Card.Description>
                  Click the green button to view the garden
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <div className='ui two buttons'>
                <Link to={`/PlotView/${plot._id}`}>
                  <Button basic color='green'>
                    
                    View
                  </Button>
                  </Link>
                  <Button basic color='red' onClick={()=>this.deleteGarden(plot._id)}>
                    Delete
                  </Button>
                </div>
              </Card.Content>
                    </Card>
                )
            });
    return(
        <>
            {plots}
            <AddPlot getPlots={this.getPlots}/>
        </>
    )
  } 
}
export default PlotContainer;