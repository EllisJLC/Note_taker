const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
const db_route = require("./routes/index");
const path = require("path")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => 
res.sendFile(path.join(__dirname, "./public/index.html"))
);
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"))
});

app.use("/api",db_route);

server.listen(port, () => {
  console.log("App is running on port " + port);
});