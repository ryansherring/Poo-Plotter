import React, {Component} from 'react';
import { Grid, Container, Image, Segment } from 'semantic-ui-react';
import axios from 'axios'
import PlantCards from './PlantCards';
import PlantContainer from './PlantContainer'

class ViewPlot extends Component {
    state = {
        plot: {}
      };
      
    componentDidMount() {
        this.showPlot()
        
    }
    showPlot = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/plots/show/${this.props.match.params.id}`)
            .then(res => {
            // console.log(res);
            this.setState({
                plot: res.data.data,
            })
            
        })
    }
    addPlantToPlot = (plantId) => {
        console.log(plantId)
        console.log(this.state.plot)
        axios.put(`${process.env.REACT_APP_API_URL}/plots/${this.props.match.params.id}/${plantId}`)
            .then(res => {
            console.log(res);
            this.setState({
                plot: res.data.data,

            })
        })
    }
    removePlantFromPlot = (plantId) => {
        console.log(plantId)
        console.log(this.state.plot)
        axios.delete(`${process.env.REACT_APP_API_URL}/plots/${this.props.match.params.id}/${plantId}`)
            .then(res => {
            console.log(res);
            this.setState({
                plot: res.data.data,
            })
        })
    }

    // handlespaceTaken(){
    //     let sumSpace = [];
    //     for (let i = 0; i < plants.length; i++) {
    //         const taken = plants[i];
    //         let sum= taken.spacing;
    //         sumSpace.push(sum);
    //     }
    //     return sumSpace
    // }

    // handleSpaceRemaining(){
    //     sqin = {plotSize} * 3 * 12;
    //     let spaceRemaining = sqin - sumSpace;
    //     return spaceRemaining
    // }

    render(){
		return (
			<div className='plot-view'>
            
				<Grid style={{background: 'grey'}}>
					<Grid.Column width={3}>
                        {/* <Container> */}
                            <Segment padded style={{overflow: 'auto', maxHeight: '90vh', background: 'lightgreen'}}>
                            <PlantCards 
                            addPlantToPlot={this.addPlantToPlot} 
                            removePlantFromPlot={this.removePlantFromPlot}
                            />
                        </Segment>
                        {/* </Container> */}
					</Grid.Column>
					<Grid.Column width={10} textAlign='Center'>
                        {/* <Container> */}
                        <Segment celled padded style={{height: '90vh', textAlign: 'center', textAlign: 'center'}}>
                            <h3>{this.state.plot.plotName}</h3>
                            <Segment style={{background: 'brown', maxWidth: '60%', marginLeft: '20'}}>
                                <Image style={{maxWidth: '100%'}} src='https://cdn.shopify.com/s/files/1/1466/7074/products/Aero_Clay_2.jpg?v=1537779855' />
                            </Segment>
                            {/* <PlantContainer/> */}
                        </Segment>
                        {/* </Container> */}
                    </Grid.Column>
                    <Grid.Column width={3}>
                        {/* <Container> */}
                        <Segment celled padded style={{height: '90vh', textAlign: 'center', background:'lightblue'}}>
                            <h5>Garden Size: </h5>
                            <p>{this.state.plot.plotSize*3} square feet</p>
                            <h5>Fish needed:</h5>
                            <p>{this.state.plot.plotSize*6} to {this.state.plot.plotSize*8}  lbs</p>
                            <h5>Fish Tank Size: </h5>
                            <p>{this.state.plot.plotSize*6/0.1} to {this.state.plot.plotSize*8/0.1} gallons</p>
                            <h5>Hydroton Media: </h5>
                            <p>{this.state.plot.plotSize*1000} liters</p>
                            <h5>Water Pump Size: </h5>
                            <p>{this.state.plot.plotSize*200*2} Gallons Per Hour Pump minus head-height loss and 10-30% efficiency loss depending on what you buy</p>
                            <h5>Siphon Needed: </h5>
                            <p>Plumbing Options coming soon</p>
                            <h5></h5>

                        </Segment>
                        {/* </Container> */}
                    </Grid.Column>
				</Grid>
			</div>
		)
	}
}
export default ViewPlot;