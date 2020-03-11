import React from "react";



const ContainerTop = props => {
  return (
    <section className="container-top">
      <div className="ct-title">
        <h1>{this.state.plots.plotName}</h1>
      </div>
      <div className="splash">
        {/* <img className="splash" src={props.img} alt="plot"></img> */}
      </div>
    </section>
  );
};

export default ContainerTop;