'use strict';

class BaseView {

  constructor(webAppRequest, webAppResponse) {
    this._webAppRequest = webAppRequest;
    this._webAppResponse = webAppResponse;
  }

  get GetWebAppRequest() {
    return this._webAppRequest;
  }

  get GetWebAppResponse() {
    return this._webAppResponse;
  }

}

module.exports = BaseView;
