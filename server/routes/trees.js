const express = require("express");
const api = express.Router();
const db = require("../models/tree");

api.get('/', async (req, res) => {
  try {
    const data = await db.find();
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

api.post('/', async (req, res) => {
  try {
    const {latitude, longitude, status} = req.body;
    const newData = {
      latitude,
      longitude,
      status
    };
    const data = await db.create(newData);
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

api.put("/:id", async (req, res) => {
  try {
    res.json({ message: 'put' });
  } catch (error) {
    res.json(error);
  }
});

api.delete('/:id', async (req, res) => {
  try {
    res.json({ message: 'delete' });
  } catch (error) {
    res.json(error);
  }
});

module.exports = api;
