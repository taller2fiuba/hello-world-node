const gitHubApiAdapter = require("../adapters/GitHubApiAdapter");
const logger = require("../../logger").logger;

module.exports = {
  index: (req, res) => {
    logger.info(
      req,
      "ejemplo de logeo en controller, que logea todo el request"
    );
    res.status(200).send({ title: "Hello world by NodeJS" });
    var algo = logger.info(
      res,
      "ejemplo de logeo en controller, que logea todo el response"
    );
  },
  github: (req, res) => {
    return gitHubApiAdapter
      .getUsuario(req.query.nombreDeUsuario)
      .then((nombre) => {
        res.send({ nombre: nombre });
      });
  },
};
