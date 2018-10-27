'use strict';

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const registerRouter = require('./routes/register');
const itemRouter = require('./routes/item');
const agentRouter = require('./routes/agent');
const orderRouter = require('./routes/order');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/item', itemRouter);
app.use('/agent', agentRouter);
app.use('/order', orderRouter);

module.exports = app;

