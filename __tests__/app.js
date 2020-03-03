const request = require('supertest')
const app = require('../src/app')

test('Test_App_01', (done) => {
  request(app).get('/').then((response) => {
    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello World!')
    done();
  })
})

test('Test_App_api_students_01', (done) => {

  request(app).get('/api/students').then((response) => {
    expect(response.status).toBe(200)
    done();
  })
})

test('Test_App_api_students_id_01', (done) => {
  request(app).get('/api/students/1').then((response) => {
    expect(response.status).toBe(200)
    expect(response.body.id).toBe(1)
    done();
  })
})

test('Test_App_api_students_id_02', (done) => {
  request(app).get('/api/students/0').then((response) => {
    expect(response.status).toBe(404)
    done();
  })
})

test('Test_App_api_subjects_01', (done) => {
  request(app).get('/api/subjects').then((response) => {
    expect(response.status).toBe(200)
    done();
  })
})

test('Test_App_api_subjects_id_01', (done) => {
  request(app).get('/api/subjects/1').then((response) => {
    expect(response.status).toBe(200)
    expect(response.body.id).toBe(1)
    done();
  })
})

test('Test_App_api_subjects_id_02', (done) => {
  request(app).get('/api/subjects/0').then((response) => {
    expect(response.status).toBe(404)
    done();
  })
})
