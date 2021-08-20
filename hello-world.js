//Tutorial: https://stackabuse.com/building-a-rest-api-with-node-and-express/

//Import Express framework
const express = require('express');

//Create Express app
const app = express();

//Set port
const port = 3000;

//Create a simple GET endpoint on the home page
app.get('/', (req, res) => {
  res.send('Hello World, from express');
})

//Start clients
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
