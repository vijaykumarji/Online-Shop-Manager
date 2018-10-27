'use strict';
const BaseView = require('../lib/base-view');
const DBClientProxy = require('../lib/db-client-proxy');

const OrderViewData = require('../view-objects/order-view-data');


class OrderView extends BaseView {

    constructor(webAppRequest, webAppResponse) {
        super(webAppRequest, webAppResponse);
        this._dbClientProxy = new DBClientProxy();
    }


    /**
     * Function to process GET request.
     */
    getAction() {

        return new Promise((resolve, reject) => {

            console.log('sxcdfdf');

            let orderID = this.GetWebAppRequest.getRequestParam('orderID');

            this._dbClientProxy.GetOrder(orderID)
                .then((res) => {

                    return resolve(res);
                })
                .catch((err) => {

                    return reject(err);
                });

        });
    }

    /**
     * Function to process POST request.
     */
    postAction() {

        return new Promise((resolve, reject) => {

            let orderID = this.GetWebAppRequest.getRequestParam('orderID');
            let params = this.GetWebAppRequest.getBodyParam('params');

            if (params && orderID) {

                let orderViewDta = new OrderViewData();
                orderViewDta.setFromJSON(params.OrderViewData);

                // todo: validate the view-data
                this._dbClientProxy.UpdateTrakingStatus(orderID, orderViewDta.Tracking_Status)
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

                let orderViewDta = new OrderViewData();
                orderViewDta.setFromJSON(params.OrderViewData);

                if (!orderViewDta.User_ID) {
                    return reject('User ID is needed');
                }

                // todo: validate the view-data
                this._dbClientProxy.AddOrder(orderViewDta)
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

module.exports = OrderView;