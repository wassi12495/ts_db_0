let express = require('express');
let app = express();
let cors = require('cors');
let http = require('http');
let mysql = require('mysql');
let helmet = require('helmet');
let bodyParser = require('body-parser');
let { router } = require('./routes.js');

app.use(cors());
app.use(helmet());
app.use('/', router);
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));

let server = http.createServer(app);
server.listen(9000);

const { Pool } = require('pg');
// const dotenv = require('dotenv');

// dotenv.config();

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   user: 'joshwasserman',
//   host: 'localhost',
//   database: 'server',
//   port: 5432
// });
