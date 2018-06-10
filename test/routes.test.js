const chai =            require('chai')
const chai_http =       require('chai-http')
const app =             require('../app.js')

const {expect} = chai

chai.use(chai_http)

describe('Active API endpoints', ()=> {

  it('GET /', done=> {
    chai.request(app).get('/').end((err, res)=> {
      expect(res).to.have.status(200)
      expect(res.body).to.have.property('error')
      done()
    })
  })

  it('GET /help', done=> {
    chai.request(app).get('/help').end((err, res)=> {
      expect(res).to.have.status(200)
      expect(res.body).to.have.property('help')
      done()
    })
  })

  it('GET /products', done=> {
    chai.request(app).get('/products').end((err, res)=> {
      expect(res).to.have.status(200)
      expect(res.body).to.have.property('version')
      expect(res.body).to.have.property('phones')
      done()
    })
  })

})
