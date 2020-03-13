import React from "react";
import { Card, CardHeader } from "semantic-ui-react"
// import "./Plot.css";

const Plot = props => {
  const {plotName} = props.plots.plotName;
  const {length} = props.plots.Plants.length
  return (
    <Card>
      {/* <img className="plot-thumbnail" src={img} alt={title}></img> */}
      <Card.Content>
        <Card.Header>{plotName}</Card.Header>
        <Card.Meta>meta info</Card.Meta>
        <Card.Description>
        <strong>{length}</strong>
        </Card.Description>
      </Card.Content>
      
    </Card>
  );
};

export default Plot;