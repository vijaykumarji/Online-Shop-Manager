'use strict';

const BaseView = require('../lib/base-view');
const DBClientProxy = require('../lib/db-client-proxy');

const RegisterViewData = require('../view-objects/register-view-data');
const jwt = require('jsonwebtoken');
const databaseConfig = require('../config/database');

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
        this._dbClientProxy.AuthenticateUser(registerViewDta)
          .then((res) => {

            if(res) {
              const token = jwt.sign({Email: registerViewDta.Email, Password: res}, databaseConfig.secret, {
                expiresIn: '1h'
              });

              databaseConfig.sessionMap.set(registerViewDta.Email, res);

              return resolve({token: 'JWT '+token});
            } else {

              return resolve('Authentication fails');
            }
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