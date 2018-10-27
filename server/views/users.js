'use strict';

const BaseView = require('../lib/base-view');

class UserView extends BaseView{

  constructor(webAppRequest, webAppResponse) {
    super(webAppRequest, webAppResponse);
  }

  getAction() {

    return new Promise((resolve, reject) => {

      this.GetWebAppResponse.addParam('User response');

      resolve();
    });
  }

}

module.exports = UserView;