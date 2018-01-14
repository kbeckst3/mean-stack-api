import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const bP = bodyParser();

const index = require('./routes/index');
const tasks = require('./routes/tasks');

const port = 3000;

const app = express();


//View Engine
app.set('veiws', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);