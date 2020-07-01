'use strict';

require('dotenv').config();

// Dependencies
const express = require('express');
const cors = require('cors');

// Initialize the App
const app = express();
app.use(cors());

const client = new pg.Client(process.env.DATABASE_URL);

// Global Variables
const PORT = 3000;

// Route Definitions
app.get('/todo', handleToDo);

// Route Handlers
function handleToDo(request, response) {
  //get from DB
  //install pg and add to .env
  //initialize SQL client connection
  //connect to DB

  let thingsToDo = [
    { task: 'watch tv' },
    { task: 'walk rosie' },
    { task: 'practice for lecture' },
    { task: 'cooking' },
    { task: 'eat cookies' },
    { task: 'take a nap' },
  ];

  response.status(200).json(thingsToDo);
}

// Go!
client.connect()
  .then (() => {
    app.listen(PORT, () => console.log('Server is running'));

  })

