'use strict';

const express = require('express');
const router = express.Router();

const RouteMediator = require('../lib/route-mediator');
const IndexView = require('../views/index');

/* GET. */
router.get('/', function (req, res, next) {

  new RouteMediator(req, res)
    .processGetAction(IndexView);
});

/* POST. */
router.post('/', function (req, res, next) {

  new RouteMediator(req, res)
    .processPostAction(IndexView);
});

module.exports = router;
