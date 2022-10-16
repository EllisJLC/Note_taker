const express = require("express");

const PORT = 3001;

const app = express();

const db_route = require("./routes/index");

app.use("/api",db_route);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
