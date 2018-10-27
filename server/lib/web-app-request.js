'use strict';

class WebAppRequest {

  constructor(expressRequset) {
    this._expressRequest = expressRequset;
  }

  get ExpressRequest() {
    return this._expressRequest;
  }

  getBodyParam(paramName) {
    return this._expressRequest.body[paramName];
  }

    getRequestParam(paramName) {
        return this._expressRequest.params[paramName];
    }
}

module.exports = WebAppRequest;