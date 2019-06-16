const db = require("./queries/todoQueries");
const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const db2 = require('./pgAdapter');

const app = express();
const port = 3000;

app.options("*", cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// test in postman
// Do data modeling
// make front end calls

app.get("/todos", cors(), db.getTodos);
app.post("/todos", cors(), db.createTodo);
app.put("/todos/:id", cors(), db.updateTodo);
app.delete("/todos/:id", cors(), db.deleteTodo);

app.listen(port, () =>
  console.log(`Writing Helpers listening on port ${port}!`)
);
