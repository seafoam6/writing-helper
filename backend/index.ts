const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const port = 3000;

// Do data modeling
// write rest routes

const client = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});
client.connect();

let dumb = "";

client.query("SELECT * FROM todos", (err, res) => {
  dumb = res;
  client.end();
});

app.get("/", (req, res) => res.send(dumb));

app.listen(port, () =>
  console.log(`Writing Helpers listening on port ${port}!`)
);
