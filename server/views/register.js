'use strict';

const BaseView = require('../lib/base-view');
const DBClientProxy = require('../lib/db-client-proxy');

const RegisterViewData = require('../view-objects/register-view-data');

class RegisterView extends BaseView {

  constructor(webAppRequest, webAppResponse) {
    super(webAppRequest, webAppResponse);
    this._dbClientProxy = new DBClientProxy();
  }

  postAction() {

    return new Promise((resolve, reject) => {

      let params = this.GetWebAppRequest.getBodyParam('params');

      if (params) {

        let registerViewDta = new RegisterViewData();
        registerViewDta.setFromJSON(params.RegisterViewData);

        console.log('dccdcc'+ JSON.stringify(registerViewDta));
        // todo: validate the view-data
        this._dbClientProxy.GetUser(registerViewDta)
          .then((res) => {
            return resolve(res);
          })
          .catch((err) => {

            console.log(err);
            return reject(err);
          });

      } else {

        return reject('Invalid view data');
      }
    });
  }

  // postAction() {

  //   return new Promise((resolve, reject) => {

  //     let params = this.GetWebAppRequest.getBodyParam('params');

  //     if (params) {

  //       let registerViewDta = new RegisterViewData();
  //       registerViewDta.setFromJSON(params.RegisterViewData);


  //       console.log(registerViewDta.getAsJSON());

  //       //   let hashedPassword = bcrypt.hashSync(registerViewDta.UserPassword, 8);

  //       this.GetWebAppResponse.addParam(registerViewDta.getAsJSON());

  //     } else {

  //       reject('Invalid view data');
  //     }

  //     resolve();
  //   });
  // }

  /**
   * Function to process PUT request.
   */
  addAction() {

    return new Promise((resolve, reject) => {

      let params = this.GetWebAppRequest.getBodyParam('params');

      if (params) {

        let registerViewDta = new RegisterViewData();
        registerViewDta.setFromJSON(params.RegisterViewData);

        console.log('dccdcc'+ JSON.stringify(registerViewDta));
        // todo: validate the view-data
        this._dbClientProxy.AddUser(registerViewDta)
          .then((res) => {
            return resolve(res);
          })
          .catch((err) => {

            console.log(err);
            return reject(err);
          });

      } else {

        return reject('Invalid view data');
      }
    });
  }
}

module.exports = RegisterView;