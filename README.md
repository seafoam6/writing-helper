# Writing Helper

I've been working on a screen play for a few years, and it's no where great. This app helps me to continue to procrastinate under the guise of helping. 

# Set up
Either set up a local postgres instance 
Go to [elephantSQL](https://www.elephantsql.com/) and sign up for a free account.

Make a `.env` file in the root directory of this project. Fill in your details to match

`
PGHOST='raja.db.elephantsql.com'
PGUSER=YOUR_USER_AND_DB
PGDATABASE=YOUR_USER_AND_DB
PGPASSWORD=YOUR_PASSWORD
PGPORT=5432
`

go to the "Browser" tab in Elephant SQL. First run

```sql
CREATE TABLE todos(
   id SERIAL PRIMARY KEY,
   description TEXT UNIQUE NOT NULL,
   created_on TIMESTAMP NOT NULL,
   active BOOLEAN NOT NULL DEFAULT TRUE
);
```
click "execute".

then run 

```sql
INSERT INTO public.todos ( description, created_on, active) VALUES ( 'sampleTodo', now(), true);
```


run `yarn install`
run `yarn run start-server` and in another shell run `yarn run start`

http://localhost:5000/list/ should have an entry