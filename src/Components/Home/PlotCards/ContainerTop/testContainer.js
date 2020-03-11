import { render } from "@testing-library/react";
import { Card, CardHeader, CardContent } from "semantic-ui-react";

for(i=0;i<plots.length;i++){
  return(
    <Card onClick=''>
      <CardHeader>
        <h5>{this.state.plotName}</h5>
      </CardHeader>
      <CardContent>
        <h7>plotSize{this.state.plotSize}</h7>
        <h7>plotSize{this.state.plants.length} Plants</h7>
      </CardContent>
    </Card>
  )
}