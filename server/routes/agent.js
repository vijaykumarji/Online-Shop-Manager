'use strict';

const express = require('express');
const router = express.Router();

const RouteMediator = require('../lib/route-mediator');
const AgentView = require('../views/agent');
const AgentsView = require('../views/agents');

/* GET. */
router.get('/list', function (req, res, next) {

  new RouteMediator(req, res).processGetAction(AgentsView);
});

/* POST. */
router.post('/:agentID', function (req, res, next) {

  new RouteMediator(req, res).processPostAction(AgentView);
});

/* PUT. */
router.put('/', function (req, res, next) {

  new RouteMediator(req, res).processAddAction(AgentView);
});


module.exports = router;
