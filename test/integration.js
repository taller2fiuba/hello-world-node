const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const server = require("../app");
const should = chai.should();
const expect = chai.expect;
const request = chai.request(server);

describe("GET /", () => {
  it("should return a json hello world", (done) => {
    request.get("/").end((err, res) => {
      res.should.have.status(200);
      expect(res.body).to.deep.equal({ title: "Hello world" });
      done();
    });
  });
});

after(() => server.close());
