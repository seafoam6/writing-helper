const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});

const getTodos = (request, response) => {
  pool.query("SELECT * FROM todos ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getTodoById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM todos WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// TESTED!
const createTodo = (request, response) => {
  const { description } = request.body;
  const created_on = new Date();

  pool.query(
    "INSERT INTO todos (description, created_on) VALUES ($1, $2)",
    [description, created_on],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Todos added with ID: ${results.id}`);
    }
  );
};

// TESTED
const updateTodo = (request, response) => {
  const id = parseInt(request.params.id);
  const { description, active } = request.body;

  pool.query(
    "UPDATE todos SET description = $1, active = $2 WHERE id = $3",
    [description, active, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Todo modified with ID: ${id}`);
    }
  );
};

// TESTED!
const deleteTodo = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM todos WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Todo deleted with ID: ${id}`);
  });
};

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
};
