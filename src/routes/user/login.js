const route = require('express').Router()

route.get("/", (req, res) => {
  res.json("login");
});

module.exports = route;