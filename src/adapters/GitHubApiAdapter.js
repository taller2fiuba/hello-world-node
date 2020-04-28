const axios = require("axios");

module.exports = {
  getUsuario: (nombreDeUsuario) => {
    return axios
      .get(`https://api.github.com/users/${nombreDeUsuario}`)
      .then((respuesta) => {
        return respuesta.data.name;
      });
  },
};
