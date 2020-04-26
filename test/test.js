// Import chai.
let chai = require("chai"),
  path = require("path");
const nock = require("nock");
const homeController = require("../src/controllers/HomeController");
const MockAdapter = require("axios-mock-adapter");

const expect = chai.expect;
const should = chai.should();

// Import the Rectangle class.
let Rectangle = require(path.join(__dirname, "..", "rectangle"));

describe("Rectangle", () => {
  describe("#width", () => {
    let rectangle;

    beforeEach(() => {
      // Create a new Rectangle object before every test.
      rectangle = new Rectangle(10, 20);
    });

    it("returns the width", () => {
      // This will fail if "rectangle.width" does
      // not equal 10.
      rectangle.width.should.equal(10);
    });

    it("can be changed", () => {
      // Assert that the width can be changed.
      rectangle.width = 30;
      rectangle.width.should.equal(30);
    });

    it("only accepts numerical values", () => {
      // Assert that an error will be thrown if
      // the width it set to a non-numerical value.
      expect(() => {
        rectangle.width = "foo";
      }).to.throw(Error, '"width" must be a number.');
    });
  });
});

class MockResponse {
  constructor() {
    this.data = {};
    this.llamado = false;
  }

  send(data) {
    this.llamado = true;
    this.data = data;
  }
}

describe("HomeController", function () {
  beforeEach(() => {
    response = new MockResponse();
    let mock = new MockAdapter(homeController.axios);
    mock.onGet("https://api.github.com/users/francoliberali").reply(200, {
      name: "John Smith",
    });
  });

  it("debe responder hello world cuando llamo al index", function () {
    homeController.index({}, response);
    response.data.title.should.equal("Hello world by NodeJS");
  });

  // it("debe responder el nombre de lo devuelto por github cuando llamo a elmascapodegithub", () => {
  // homeController.elmascapodegithub({}, response);
  // response.llamado.should.equal(true);
  // response.data.should.equal("Franco Liberali");
  // });
});
