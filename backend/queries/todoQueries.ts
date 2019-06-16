import * as _i from '../../src/utils/interfaces'
const db = require('../pgAdapter')

const getTodos = (request, response) => {
  db.many("SELECT * FROM todos ORDER BY id ASC").then((data: _i.DatabaseResponseRow[]) => {
    response.status(200).json(data);
})
.catch(error => {
    console.log('ERROR:', error); // print the error;
})
};

const createTodo = (request, response) => {
  const { description } = request.body;
  const created_on = new Date();

  db.one(
    "INSERT INTO todos (description, created_on) VALUES ($1, $2) RETURNING description, created_on, id, active",
    [description, created_on]).then(
    (data: _i.DatabaseResponseRow) => {
      response.status(201).send(data);
    }
  ).catch(error => console.log(error));
};

// TESTED
const updateTodo = (request, response) => {
  const id = parseInt(request.params.id);
  const { description, active } = request.body;

  db.one(
    "UPDATE todos SET description = $1, active = $2 WHERE id = $3 RETURNING description, created_on, id, active",
    [description, active, id])
    .then((data: _i.DatabaseResponseRow) => {
      response.status(202).send(data);
    }
  ).catch(error => console.log(error));
};

// TESTED!
const deleteTodo = (request, response) => {
  const id = parseInt(request.params.id);

  db.none("DELETE FROM todos WHERE id = $1", [id]).then( (data) => {
    response.status(203).send(`${id}`);
  }
  ).catch(error => console.log(error));
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
};
