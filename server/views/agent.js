'use strict';
const BaseView = require('../lib/base-view');
const DBClientProxy = require('../lib/db-client-proxy');

const AgentViewData = require('../view-objects/agent-view-data');


class AgentView extends BaseView {

  constructor(webAppRequest, webAppResponse) {
    super(webAppRequest, webAppResponse);
    this._dbClientProxy = new DBClientProxy();
  }

  /**
   * Function to process POST request.
   */
  postAction() {

    return new Promise((resolve, reject) => {

      let agentID = this.GetWebAppRequest.getRequestParam('agentID');
      let params = this.GetWebAppRequest.getBodyParam('params');

      if (params && agentID) {

        let agentViewDta = new AgentViewData();
        agentViewDta.setFromJSON(params.AgentViewData);

        // todo: validate the view-data
        this._dbClientProxy.UpdateAgent(agentID, agentViewDta)
          .then((res) => {
            return resolve(res);
          })
          .catch((err) => {
            console.log(err);
            return reject(err);
          });

      } else {

        return reject('Invalid view data or Request Param');
      }
    });

  }

  /**
   * Function to process PUT request.
   */
  addAction() {

    return new Promise((resolve, reject) => {

      let params = this.GetWebAppRequest.getBodyParam('params');

      if (params) {

        let agentViewDta = new AgentViewData();
        agentViewDta.setFromJSON(params.AgentViewData);

        // todo: validate the view-data
        this._dbClientProxy.AddAgent(agentViewDta)
          .then((res) => {
            return resolve(res);
          })
          .catch((err) => {

            return reject(err);
          });

      } else {

        return reject('Invalid view data');
      }
    });
  }
}

module.exports = AgentView;