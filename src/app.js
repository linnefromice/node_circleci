const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes')

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.type('html')
  res.status(200).send('Hello World!')
})
app.use('/api/students', routes.apiStudents)
app.use('/api/subjects', routes.apiSubjects)

module.exports = app