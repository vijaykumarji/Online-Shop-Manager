'use strict';

const express = require('express');
const router = express.Router();

const RouteMediator = require('../lib/route-mediator');
const RegisterView = require('../views/register');

/* GET home page. */

router.get('/', function (req, res, next) {

  new RouteMediator(req, res)
    .processGetAction(RegisterView);

});

router.post('/authenticate', function (req, res, next) {

  new RouteMediator(req, res)
    .processPostAction(RegisterView);

});

router.put('/', function (req, res, next) {

  new RouteMediator(req, res)
    .processAddAction(RegisterView);

});

module.exports = router;
