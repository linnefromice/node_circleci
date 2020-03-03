const request = require('supertest')
const app = require('../src/app')

test('Test_App_01', (done) => {
  request(app).get('/').then((response) => {
    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello World!')
    done();
  })
})