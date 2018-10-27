'use strict';

const express = require('express');
const router = express.Router();

const RouteMediator = require('../lib/route-mediator');
const UserView = require('../views/index');

/* GET users listing. */
router.get('/', function (req, res, next) {

  new RouteMediator(req, res)
    .processGetAction(UserView);
});

module.exports = router;
