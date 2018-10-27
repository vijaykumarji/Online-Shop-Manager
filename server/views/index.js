'use strict';
const BaseView = require('../lib/base-view');


class IndexView extends BaseView{

  constructor(webAppRequest, webAppResponse) {
    super(webAppRequest, webAppResponse);
  }

  getAction() {

    return new Promise((resolve, reject) => {

      this.GetWebAppResponse.addParam('GET Sending the data to route');

      resolve();
    });
  }

  postAction() {

    return new Promise((resolve, reject) => {

      this.GetWebAppResponse.addParam('POST Sending the data to route');

      resolve();
    });
  }

}

module.exports = IndexView;