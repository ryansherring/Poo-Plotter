This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

This is PooPlotter

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Description

This app is made for plotting out aquaponic gardens. It uses three data models that are referenced by IDs. The eventual aim is to price out what materials are needed and then access a Grant Database based on the gross total funds required.

Right now, one can operate full CRUD on the garden plots, but editing the plot only happens in the backend, as there is a rendering issue.

### Current Challenges

Right now, outside of general styling and design throughout the site, the plants need to be rendered by passing each specific plant id from the plantSeed into the plantCards file so that the plant.quantity of that can be increased or decreased.

Furthermore, rendering those plants by quantity on the garden plot will allow for further calculations on the right sidebar, which will help meet my eventual goal.