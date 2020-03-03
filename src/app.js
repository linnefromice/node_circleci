const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.type('html')
  res.status(200).send('Hello World!')
})

const students = [
  {id: 1, name: "Mike"},
  {id: 2, name: "Elie"},
  {id: 3, name: "Matt"},
  {id: 4, name: "Joel"},
  {id: 5, name: "Michael"}
]
const subjects = [
  {id: 1, name: "Japanese Language"},
  {id: 2, name: "Mathematics"},
  {id: 3, name: "Geography and History"},
  {id: 4, name: "Science"},
  {id: 5, name: "Foreign Languages"}
]
// https://www.mext.go.jp/a_menu/shotou/new-cs/youryou/eiyaku/__icsFiles/afieldfile/2011/04/11/1298353_0.pdf

app.get('/students', (req, res) => {
  res.type('json')
  res.status(200).json(students)
})

app.get('/subjects', (req, res) => {
  res.type('json')
  res.status(200).json(subjects)
})

module.exports = app