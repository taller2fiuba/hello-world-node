const User = require("../models/user");

module.exports = {
  crear: (req, res) => {
    const user = new User({ name: "Juan", lastname: "Perez", age: 85 });

    user
      .save()
      .then(() => {
        res.send(user);
      })
      .catch(() => {});
  },
  cantidad: () => {
    return 10;
  },
};
