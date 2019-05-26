

// id, string

CREATE TABLE todos(
   id SERIAL PRIMARY KEY,
   description TEXT UNIQUE NOT NULL,
   created_on TIMESTAMP NOT NULL
);