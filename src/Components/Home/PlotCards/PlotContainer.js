import React from "react";
import Plot from "./Plots/Plots";
import ContainerTop from "./ContainerTop/ContainerTop";
// import postSeed from "./postSeed.json";
import { Card } from 'semantic-ui-react';
import axios from 'axios'

class PlotContainer extends React.Component {
  state = {
    plots: [],
    plotName: '',
    plotSize: '',
    plants: []
  };

  componentDidMount() {
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

  displayTop() {
    return (
      <ContainerTop
        key={Math.random() * 100}
        plotName={this.state.plotName}
        // subtitle={this.state.subtitle}
        // img={this.state.img}
      />
    );
  }

  displayPlots = Plot => {
    return this.state.plots.map(plot => {
      return <Plot key={Math.random() * 10000} plot={plot} />;
    });
  };

  render() {
    console.log(this.state.plots);
    let plots=null;
    plots = this.state.plots.map(plot => {
    //   return <Card key={plot._id} plot={plot}/>
    console.log(plot.plotName)
        // return(
        //     // <Card className="plotContainer">
        //     //     <p>{plot.plotName}</p>
        //     // </Card>
        //     <p>Hello</p>
        // )
    }
    // )
  }
}
export default PlotContainer;