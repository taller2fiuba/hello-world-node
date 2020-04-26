const axios = require("axios");

module.exports = {
  index: (req, res) => {
    res.send({ title: "Hello world by NodeJS" });
  },
  elmascapodegithub: (req, res) => {
    axios
      .get("https://api.github.com/users/francoliberali")
      .then((response) => res.send({ title: "gato" }))
      .catch((error) => res.send({ title: "gato2" }));
  },
  axios: axios,
};
