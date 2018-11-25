'use strict';

const express = require('express');
const router = express.Router();
const passport = require('passport');

const RouteMediator = require('../lib/route-mediator');
const OrderView = require('../views/order');
const OrdersView = require('../views/orders'); 

/* GET List. */
router.get('/list/all',passport.authenticate('jwt', {session: false}) , function (req, res, next) {

    new RouteMediator(req, res).processGetAction(OrdersView);
});

/* GET. */
router.get('/:orderID',passport.authenticate('jwt', {session: false}), function (req, res, next) {

    new RouteMediator(req, res).processGetAction(OrderView);
});

/* PUT. */
router.put('/',passport.authenticate('jwt', {session: false}), function (req, res, next) {

    new RouteMediator(req, res).processAddAction(OrderView);
});

/* PUT. */
router.post('/tracking/update/:orderID',passport.authenticate('jwt', {session: false}), function (req, res, next) {

    new RouteMediator(req, res).processPostAction(OrderView);
});


module.exports = router;
