/* istanbul ignore file */
const gitHubApiAdapter = require("../adapters/GitHubApiAdapter");

module.exports = {
  index: (req, res) => {
    res.send({ title: "Hello world by NodeJS" });
  },
  github: (req, res) => {
    return gitHubApiAdapter
      .getUsuario(req.query.nombreDeUsuario)
      .then((nombre) => {
        res.send({ nombre: nombre });
      });
  },
};
