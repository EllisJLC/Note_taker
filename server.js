const express = require("express");

const PORT = 3001;
const notes = require("./db/db.json")

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/api/notes", (req, res) => {
  console.log("Get request received");
  if (req && req.body) {
    console.log(req);
    res.status(200).json("Success!")
  } else {
    res.status(404).json("notes not found.")
  }
})

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
