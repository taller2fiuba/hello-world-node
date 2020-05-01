/* istanbul ignore file */
const gitHubApiAdapter = require("../adapters/GitHubApiAdapter");

module.exports = {
  index: (req, res) => {
    req.log.warn("ejemplo de logeo en controller, que logea todo el request");
    res.send({ title: "Hello world by NodeJS" });
    res.log.warn("ejemplo de logeo en controller, que logea todo el response");
  },
  github: (req, res) => {
    return gitHubApiAdapter
      .getUsuario(req.query.nombreDeUsuario)
      .then((nombre) => {
        res.send({ nombre: nombre });
      });
  },
};
