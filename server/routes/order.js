'use strict';

const express = require('express');
const router = express.Router();

const RouteMediator = require('../lib/route-mediator');
const OrderView = require('../views/order');
const OrdersView = require('../views/orders');

/* GET List. */
router.get('/list/all', function (req, res, next) {

    new RouteMediator(req, res).processGetAction(OrdersView);
});

/* GET. */
router.get('/:orderID', function (req, res, next) {

    new RouteMediator(req, res).processGetAction(OrderView);
});

/* PUT. */
router.put('/', function (req, res, next) {

    new RouteMediator(req, res).processAddAction(OrderView);
});

/* PUT. */
router.post('/tracking/update/:orderID', function (req, res, next) {

    new RouteMediator(req, res).processPostAction(OrderView);
});


module.exports = router;
