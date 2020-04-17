const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../app');
const should = chai.should();
const expect = chai.expect;

describe('GET /', () => {
  it('should return a json hello world', done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.deep.equal({title:'Hello world'});
        done();
      });
  });
})