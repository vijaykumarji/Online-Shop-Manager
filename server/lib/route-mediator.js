'use strict';

const WebAppRequest = require('./web-app-request');
const WebAppResponse = require('./web-app-response');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../web-config');

class RouteMediator {

  constructor(expressRequest, expressResponse) {
    this._webAppRequest = new WebAppRequest(expressRequest);
    this._webAppResponse = new WebAppResponse(expressResponse);
  }

  processGetAction(view) {

    new view(this._webAppRequest, this._webAppResponse).getAction()
      .then((result) => {

          this._webAppResponse.endExpressResponse(200, result);
      })
      .catch((error) => {

          this._webAppResponse.endExpressResponse(500,  error);
      });
  }

  processPostAction(view) {

    new view(this._webAppRequest, this._webAppResponse).postAction()
      .then((result) => {

          this._webAppResponse.endExpressResponse(201, result);
      })
      .catch((error) => {
          this._webAppResponse.endExpressResponse(500, error);
      });
  }

  processAddAction(view) {

    new view(this._webAppRequest, this._webAppResponse).addAction()
      .then((result) => {

        this._webAppResponse.endExpressResponse(200, result);
      })
      .catch((error) => {

        this._webAppResponse.endExpressResponse(500, error);
      });
  }

  processDeleteAction(view) {

    new view(this._webAppRequest, this._webAppResponse).deleteAction()
      .then((result) => {

        this._webAppResponse.endExpressResponse(200, result);
      })
      .catch((error) => {

        this._webAppResponse.endExpressResponse(500, error);
      });
  }

}

module.exports = RouteMediator;