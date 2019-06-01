

# id, descritpion, created_on, active

CREATE TABLE todos(
   id SERIAL PRIMARY KEY,
   description TEXT UNIQUE NOT NULL,
   created_on TIMESTAMP NOT NULL,
   active BOOLEAN NOT NULL DEFAULT TRUE
);