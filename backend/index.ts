 const rest = require("./queries/todoQueries");
const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./pgAdaptor');
const expressGraphQl = require("express-graphql");
const graphql = require("graphql");
const { GraphQLSchema } = graphql;
const { query } = require("./queries");
const { mutation } = require("./mutations");

const app = express();
const port = 3000;

app.options("*", cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const schema = new GraphQLSchema({
  query,
  mutation
});



app.use(
  '/gql',
  expressGraphQl({
    schema: schema,
    graphiql: true
  })
);

app.get("/todos", cors(), rest.getTodos);
app.post("/todos", cors(), rest.createTodo);
app.put("/todos/:id", cors(), rest.updateTodo);
app.delete("/todos/:id", cors(), rest.deleteTodo);

app.listen(port, () =>
  console.log(`Writing Helpers listening on port ${port}!`)
);

export {};