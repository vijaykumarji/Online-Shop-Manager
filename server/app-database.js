#!/usr/bin/env node
'use strict';

const MongoClient = require('mongodb').MongoClient;

let dbstate = {
  db: null,
  client: null,
  session: null
};


exports.connect = function (url, done) {

  if (dbstate.db) {
    return done();
  }

  MongoClient.connect(url,{ useNewUrlParser: true },function (err, client) {

    if (err) {
      return done(err);
    }

    dbstate.client = client;
    dbstate.db = client.db();
    dbstate.session = client.startSession();
    done();
  });
};


exports.get = function () {
  return dbstate.db;
};

exports.client = function () {
  return dbstate.client;
};

exports.session = function () {
  return dbstate.session;
};

exports.close = function (done) {
  if (dbstate.db) {
    dbstate.db.close(function (err, result) {
      dbstate.client.endSession();
      dbstate.db = null;
      dbstate.mode = null;
      done(err);
    });
  }
};