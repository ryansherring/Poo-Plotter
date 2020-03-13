// import React, {Component} from 'react';
// import { Card, CardGroup, Container } from 'semantic-ui-react';
// import axios from 'axios'

// class PlantContainer extends Component {
//     state = {
//         plants: [],
        
//     }

//     componentDidMount() {
//         this.showPlot()
//     }

//     showPlot = () => {
//         axios.get(`${process.env.REACT_APP_API_URL}/plots/show/${this.props.match.params.id}`)
//             .then(res => {
//             console.log(res.data.data);
//             this.setState({
//                 plant: res.data.data,
//             })
//         })
//     }
//     render(){
//         console.log(this.state.plant);
//         // let plants =  this.state.Plants.map(plant => {
//         return (
//         <Container>
//             <CardGroup>
//             <Card 
//             // key={plant._id}
//             >
//                 <Card.Content>
//                 {/* <Card.Header>{plants.plantName}</Card.Header> */}
//                 {/* <Card.Meta>{plant.spacing}</Card.Meta> */}
//                 <Card.Description>
//                     {/* {plants.ph} */}
//                 </Card.Description>
//                 </Card.Content>
//                 <Card.Content extra>
//                 <div className='ui two buttons'>
//                 {/* <Link to={`/plot/${plot._id}`}></Link>*/}
//                 </div>
//               </Card.Content>
//             </Card>
//             </CardGroup>
//         </Container>
//                 )
//         // })
//     }
// }

// export default PlantContainer;