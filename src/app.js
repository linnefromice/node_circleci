const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

const students = ["Mike", "Elie", "Matt", "Joel", "Michael"]
const subjects = ["Japanese Language", "Mathematics", "Geography and History", "Science", "Foreign Languages"]
// https://www.mext.go.jp/a_menu/shotou/new-cs/youryou/eiyaku/__icsFiles/afieldfile/2011/04/11/1298353_0.pdf

app.get('/students', (req, res) => {
  res.status(200).json(students)
})

app.get('/subjects', (req, res) => {
  res.status(200).json(subjects)
})

module.exports = app