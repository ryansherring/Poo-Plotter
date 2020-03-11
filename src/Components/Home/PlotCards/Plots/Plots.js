import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader } from "semantic-ui-react"
// import "./Plot.css";

const Plot = props => {
  const { _id, title, content } = props.plot;
  return (
    <Card>
      {/* <img className="plot-thumbnail" src={img} alt={title}></img> */}
      <CardHeader></CardHeader>
        <div className="plot-header">
          <h3>
            <Link to={`/plots/${_id}`}>{title}</Link>
          </h3>
        </div>
        <p className="plot-snippet">{content}</p>
    </Card>
  );
};

export default Plot;