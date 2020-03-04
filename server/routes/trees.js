const express = require("express");
const api = express.Router();
const db = require("../models/tree");
const isAuthenticated = require("../middleware/isAuthenticated");
const isAuthorized= require("../middleware/isAuthorized");

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
    res.json({ message: 'put' });
  } catch (error) {
    res.json(error);
  }
});

api.delete('/:id', isAuthenticated, isAuthorized, async (req, res) => {
  try {
    res.json({ message: 'delete' });
  } catch (error) {
    res.json(error);
  }
});

module.exports = api;
