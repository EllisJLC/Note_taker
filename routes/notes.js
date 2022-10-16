const rout = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const notes = require("../db/db.json")

rout.get('/', (req,res) => {
  console.log("Get request received");
  console.log(notes);
  if (req) {
    console.log(req.body);
    res.status(200).json("Success!");
  } else {
    res.status(404).json("notes not found.")
  }
});

module.exports = rout