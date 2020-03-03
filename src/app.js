const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

const students = ["Mike", "Elie", "Matt", "Joel", "Michael"]

app.get('/students', (req, res) => {
  res.status(200).json(students)
})

module.exports = app