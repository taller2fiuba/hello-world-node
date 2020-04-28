// Import chai.
let chai = require("chai"),
  path = require("path");
const sinon = require("sinon");
const homeController = require("../src/controllers/HomeController");
const gitHubApiAdapter = require("../src/adapters/GitHubApiAdapter");

const expect = chai.expect;
const should = chai.should();

class MockResponse {
  constructor() {
    this.data = {};
  }

  send(data) {
    this.data = data;
  }
}

describe("HomeController", function () {
  beforeEach(() => {
    response = new MockResponse();
  });

  it("debe responder hello world cuando llamo al index", function () {
    homeController.index({}, response);
    response.data.title.should.equal("Hello world by NodeJS");
  });

  it("debe responder el nombre de lo devuelto por github cuando llamo a github", () => {
    let stub = sinon
      .stub(gitHubApiAdapter, "getUsuario")
      .returns(Promise.resolve("Franco Liberali"));
    homeController
      .github({ query: { nombreDeUsario: "francoliberali" } }, response)
      .then(() => {
        response.data.nombre.should.equal("Franco Liberali");
      });
  });
});
