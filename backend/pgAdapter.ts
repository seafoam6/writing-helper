const pgPromise = require('pg-promise');
const pgp = pgPromise({});

const config = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
};

const db = pgp(config);

export default db;