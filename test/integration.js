const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const server = require("../app");
const should = chai.should();
const expect = chai.expect;
const request = chai.request(server);
const mongoose = require("../src/db/mongoose");
// const process = require('process');

describe("GET /", () => {
  it("should return a json hello world", (done) => {
    request.get("/").end((err, res) => {
      res.should.have.status(200);
      expect(res.body).to.deep.equal({ title: "Hello world 2by NodeJS" });
      done();
    });
  });
});

// after((done) => {
// server.close(done);
// request.server.close();
// mongoose.disconnect();
// var callback = setImmediate(function () {
// server.emit("close");
// });
// server.close(callback);
// });

after((done) => {
  process.exit(done);
});
