const express = require("express");
const api = express.Router();
const db = require("../models/tree");
const isAuthenticated = require("../middleware/isAuthenticated");
const isAuthorized = require("../middleware/isAuthorized");

api.get('/', async (req, res) => {
  try {
    const data = await db.find();
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

api.post('/', isAuthenticated, async (req, res) => {
  try {
    const {username, user_id} = req.cookies;
    const {latitude, longitude, status} = req.body;
    const newData = {
      latitude,
      longitude,
      status,
      createdBy_username:username,
      createdBy_id:user_id
    };
    const data = await db.create(newData);
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

api.put("/:id", isAuthenticated, isAuthorized, async (req, res) => {
  try {
    const id = req.cookies.user_id;

    const updateCmd = {
      $set: req.body
    };

    const updatedData = await db.findByIdAndUpdate({_id:id}, updateCmd, {new:true});
    res.json({data:updatedData, status:'success'});
  } catch (error) {
    res.json(error);
  }
});

api.delete('/:id', isAuthenticated, isAuthorized, async (req, res) => {
  try {
    const id = req.cookies.user_id;
    await db.findByIdAndRemove({_id:id});
    res.json({
      status:'success',
      id:id,
      message: 'successfully deleted feature'
    });
  } catch (error) {
    res.json(error);
  }
});

module.exports = api;
