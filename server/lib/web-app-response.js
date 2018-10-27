'use strict';

class WebAppResponse {

  constructor(expressResponse) {
    this._expressResponse = expressResponse;
    this._param = null;
  }

  get ExpressResponse() {
    return this._expressResponse;
  }

  addParam(jsonObject) {

    if(jsonObject) {
      this._param = jsonObject;
    }
  }

  endExpressResponse(statusCode, response) {
    this._expressResponse.status(statusCode).send({"params": response});
  }
}

module.exports = WebAppResponse;