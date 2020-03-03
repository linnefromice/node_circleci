const express = require('express');
const router = express.Router();

const subjects = [
  {id: 1, name: "Japanese Language"},
  {id: 2, name: "Mathematics"},
  {id: 3, name: "Geography and History"},
  {id: 4, name: "Science"},
  {id: 5, name: "Foreign Languages"}
]
// https://www.mext.go.jp/a_menu/shotou/new-cs/youryou/eiyaku/__icsFiles/afieldfile/2011/04/11/1298353_0.pdf

router.get('/', (req, res) => {
  res.type('json')
  res.status(200).json(subjects)
})

router.get('/:id', (req, res) => {
  const selectedId = req.params.id;

  for (let dto of subjects) {
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