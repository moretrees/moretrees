const express = require("express");
const api = express.Router();
const treesRoutes = require("./trees");

// routes
api.use("/trees", treesRoutes);


module.exports = api;