const express = require('express');
const router = express.Router();

const subjectAreas = [
  {id: 1, name: "Japanese Language"},
  {id: 2, name: "Mathematics"},
  {id: 3, name: "Geography and History"},
  {id: 4, name: "Science"},
  {id: 5, name: "Foreign Languages"}
]
const subjects = [
  {id: 1, areaId: 1, name: "Integrated Japanese Language"},
  {id: 2, areaId: 1, name: "Japanese Language Expression"},
  {id: 3, areaId: 1, name: "Contemporary Japanese Language"},
  {id: 4, areaId: 1, name: "Classics"},
  {id: 5, areaId: 2, name: "Mathematics Ⅰ"},
  {id: 6, areaId: 2, name: "Mathematics Ⅱ"},
  {id: 7, areaId: 2, name: "Mathematics Ⅲ"},
  {id: 8, areaId: 2, name: "Mathematics A"},
  {id: 9, areaId: 2, name: "Mathematics B"},
  {id: 10, areaId: 2, name: "Application of Mathematics"},
  {id: 11, areaId: 3, name: "World History"},
  {id: 12, areaId: 3, name: "Japanese History"},
  {id: 13, areaId: 3, name: "Geography"},
  {id: 14, areaId: 4, name: "Science and Our Daily Life"},
  {id: 15, areaId: 4, name: "Physics"},
  {id: 16, areaId: 4, name: "Chemistry"},
  {id: 17, areaId: 4, name: "Biology"},
  {id: 18, areaId: 4, name: "Earth Science"},
  {id: 19, areaId: 5, name: "Basic English Communication"},
  {id: 20, areaId: 5, name: "English Communication"},
  {id: 21, areaId: 5, name: "English Expression"},
]
// https://www.mext.go.jp/a_menu/shotou/new-cs/youryou/eiyaku/__icsFiles/afieldfile/2011/04/11/1298353_0.pdf

router.get('/', (req, res) => {
  res.type('json')
  res.status(200).json(subjectAreas)
})

router.get('/:id', (req, res) => {
  const selectedId = req.params.id;

  for (let dto of subjectAreas) {
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