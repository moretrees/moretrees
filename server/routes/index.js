const express = require("express");
const api = express.Router();
const treesRoutes = require("./trees");
const s3Routes = require("./aws-s3");
const userRoutes = require("./users");

// routes
api.use("/trees", treesRoutes);
api.use("/s3", s3Routes);
api.use("/users", userRoutes);


module.exports = api;