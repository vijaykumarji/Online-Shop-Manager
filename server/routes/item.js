'use strict';

const express = require('express');
const router = express.Router();

const RouteMediator = require('../lib/route-mediator');
const ItemView = require('../views/item');
const ItemsView = require('../views/items');

/* GET. */
router.get('/list/:category', function (req, res, next) {

    new RouteMediator(req, res).processGetAction(ItemsView);
});

/* GET. */
router.get('/:itemID', function (req, res, next) {

    new RouteMediator(req, res).processGetAction(ItemView);
});

/* POST. */
router.post('/:itemID', function (req, res, next) {

    new RouteMediator(req, res).processPostAction(ItemView);
});

/* PUT. */
router.put('/', function (req, res, next) {

    new RouteMediator(req, res).processAddAction(ItemView);
});

/* DELETE. */
router.delete('/:itemID', function (req, res, next) {

  new RouteMediator(req, res).processDeleteAction(ItemView);
});

module.exports = router;
