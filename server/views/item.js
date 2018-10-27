'use strict';
const BaseView = require('../lib/base-view');
const DBClientProxy = require('../lib/db-client-proxy');

const ItemViewData = require('../view-objects/item-view-data');


class ItemView extends BaseView {

  constructor(webAppRequest, webAppResponse) {
    super(webAppRequest, webAppResponse);
    this._dbClientProxy = new DBClientProxy();
  }

  /**
   * Function to process GET request.
   */
  getAction() {

    return new Promise((resolve, reject) => {

      let itemID = this.GetWebAppRequest.getRequestParam('itemID');

      if (itemID) {

        // todo: validate the view-data
        this._dbClientProxy.GetItem(itemID)
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

  /**
   * Function to process POST request.
   */
  postAction() {

    return new Promise((resolve, reject) => {

      let itemID = this.GetWebAppRequest.getRequestParam('itemID');
      let params = this.GetWebAppRequest.getBodyParam('params');

      if (params && itemID) {

        let itemViewDta = new ItemViewData();
        itemViewDta.setFromJSON(params.ItemViewData);

        // todo: validate the view-data
        this._dbClientProxy.UpdateItem(itemID, itemViewDta)
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

        let itemViewDta = new ItemViewData();
        itemViewDta.setFromJSON(params.ItemViewData);

        // todo: validate the view-data
        this._dbClientProxy.AddItem(itemViewDta)
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

  /**
   * Function to process Delete request.
   */
  deleteAction() {

    return new Promise((resolve, reject) => {

      let itemID = this.GetWebAppRequest.getRequestParam('itemID');

      if (itemID) {

        // todo: validate the view-data
        this._dbClientProxy.DeleteItem(itemID)
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

module.exports = ItemView;