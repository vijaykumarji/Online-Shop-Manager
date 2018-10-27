'use strict';
const BaseView = require('../lib/base-view');
const DBClientProxy = require('../lib/db-client-proxy');


class ItemsView extends BaseView{

    constructor(webAppRequest, webAppResponse) {
        super(webAppRequest, webAppResponse);
        this._dbClientProxy = new DBClientProxy();
    }


    /**
     * Function to process GET request.
     */
    getAction() {

        return new Promise((resolve, reject) => {

            this._dbClientProxy.GetItems()
                .then((res) => {

                    return resolve(res);
                })
                .catch((err) => {

                    return reject(err);
                });

        });
    }

}

module.exports = ItemsView;