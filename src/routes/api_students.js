const express = require('express');
const router = express.Router();

const students = [
  {id: 1, name: "Mike"},
  {id: 2, name: "Elie"},
  {id: 3, name: "Matt"},
  {id: 4, name: "Joel"},
  {id: 5, name: "Michael"}
]

router.get('/', (req, res) => {
  res.type('json')
  res.status(200).json(students)
})

router.get('/:id', (req, res) => {
  const selectedId = req.params.id;

  for (let dto of students) {
    if (dto.id == selectedId) {
      res.type('json')
      res.status(200).json(dto)
      return
    }
  }
  res.sendStatus(404)
  return
})

module.exports = router