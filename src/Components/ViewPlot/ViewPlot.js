import React, {Component} from 'react';
import { Grid, Container } from 'semantic-ui-react';
import axios from 'axios'
import PlantCards from './PlantCards';

console.log('whats going on')
class ViewPlot extends Component {
    state = {
        plot: {}
      };
      
    componentDidMount() {
        this.showPlot()
        console.log('showPlot did mount')
    }
    showPlot = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/plots/show/${this.props.match.params.id}`)
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
				<Grid>
					<Grid.Column width={3}>
                        <Container>
                            <h5>Plants</h5>
                            {/* <p>Garden space available: {spaceRemaining} </p> */}
                            <PlantCards />

                        </Container>
					</Grid.Column>
					<Grid.Column width={10}>
                        <Container>
                            <h3>{this.state.plot.plotName}</h3>
                            <h3>{this.state.plot.plotSize}</h3>
                        </Container>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Container>
                            <h5>Outputs</h5>
                            <p>Fish needed</p>
                        </Container>
                    </Grid.Column>
				</Grid>
			</div>
		)
	}
}
export default ViewPlot;