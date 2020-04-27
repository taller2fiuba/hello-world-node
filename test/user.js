const sinon = require("sinon");
const userController = require("../src/controllers/UserController");
const assert = require("assert");

describe("UserController", () => {
  beforeEach(() => {});

  it("cantidad es llamado una vez", () => {
    let spyCantidad = sinon.spy(userController, "cantidad");

    assert.equal(userController.cantidad(), 10);
    assert(spyCantidad.calledOnce);
    spyCantidad.restore();
  });

  it("crear retorna un json con la información del usuario", () => {
    let user = { nombre: "pepe", apellido: "peres" };
    let stubCrear = sinon.stub(userController, "crear").returns(user);

    let result = userController.crear(
      () => {},
      () => {}
    );

    assert.equal(result.nombre, user.nombre);
    assert.equal(result.apellido, user.apellido);

    stubCrear.restore();
  });
});
