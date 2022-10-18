const rout = require('express').Router();
const {readAndAppend, idGenerator} = require('../helpers/fsUtils');
const notes = require("../db/db.json");
const fs = require('fs');
const util = require('util');

rout.get('/', (req,res) => {
  if (req) {
    const read = util.promisify(fs.readFile);
    read('./db/db.json')
    .then((data) => {
      res.json(JSON.parse(data));
    });
  } else {
    res.status(404).json("notes not found.");
  }
});

rout.post('/', (req,res) => {
  console.log("post received");
  if (req && req.body) {
    let destination = "./db/db.json";
    let {text, title} = req.body;
    let newNote = {
      text,
      title,
      id: idGenerator()
    }
    console.log(newNote)
    readAndAppend(newNote, destination);
    res.json("Note saved!");
  } else {
    res.json("Note incomplete");
  }
})

module.exports = rout