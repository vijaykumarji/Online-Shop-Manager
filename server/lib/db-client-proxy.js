'use strict';
const mongo = require('mongodb');
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcryptjs');

const db = require('../app-database');
const RegisterViewData = require('../view-objects/register-view-data')

const DBCollection = {
  'USER': 'User',
  'ITEM': 'Item',
  'ORDER': 'Order',
  'AGENT': 'Agent'
};


class DBClientProxy {

  constructor() {

  };

    /**
   * Function to ADD a particular user
   */
  AuthenticateUser(userObject) {

    return new Promise((resolve, reject) => {
      if (db !== null) {

        let result;
        let hashPassword;

        if (!userObject.Email) {
          return reject('Email ID is needed');
        }

        db.get().collection(DBCollection.USER).findOne({ 'Email': userObject.Email })
          .then((findResult) => {

            if(findResult)  {

            hashPassword = findResult.Password;

            return bcrypt.compare(userObject.Password, findResult.Password); 
                   
          } else {
            
              return Promise.resolve(false);
            }
          })
          .then((compareResult) => {

            if(compareResult) {
              resolve(hashPassword);
            } else {

              resolve('');
            }
            
          })
          .catch((error) => {

            return reject(error);
          });
      } else {
        reject('Connection Error');
      }
    });
  }

  /**
   * Function to ADD a particular user
   */
  GetUser(userObject) {

    return new Promise((resolve, reject) => {
      if (db !== null) {

        let result;

        if (!userObject.Email) {
          return reject('Email ID is needed');
        }

        db.get().collection(DBCollection.USER).find({ 'Email': userObject.Email }).toArray()
          .then((findResult) => {

            resolve(findResult);
          })
          .catch((error) => {

            return reject(error);
          });
      } else {
        reject('Connection Error');
      }
    });
  }

  /**
   * Function to ADD a particular user
   */
  AddUser(userObject) {

    return new Promise((resolve, reject) => {
      if (db !== null) {

        let result;

        if (!userObject.Email) {
          return reject('Email ID is needed');
        }

        db.session().startTransaction();

        db.get().collection(DBCollection.USER).find({ 'Email': userObject.Email }).toArray()
          .then((findResult) => {

            if (findResult.length > 0) {
              return Promise.reject('Email already exist');
            }

            return bcrypt.genSalt(10);
          })
          .then((salt) => {

            return bcrypt.hash(userObject.Password, salt);
          })
          .then((hash) => {

            userObject.Password = hash;

            return db.get().collection(DBCollection.USER).insertOne(userObject.getAsJSON().RegisterViewData);
          })
          .then((res) => {

            result = res;

            return db.session().commitTransaction();
          })
          .then(() => {

            resolve(result);
          })
          .catch((error) => {

            db.session().abortTransaction();
            return reject(error);
          });
      } else {
        reject('Connection Error');
      }
    });
  }

  /**
   * Function to ADD a item to db
   */
  AddItem(itemObject) {

    return new Promise((resolve, reject) => {
      if (db !== null) {

        db.get().collection(DBCollection.ITEM).insertOne(itemObject.getAsJSON().ItemViewData)
          .then((res) => {

            resolve(res);
          })
          .catch((error) => {

            return reject(error);
          });

      } else {
        reject('Connection Error');
      }
    });
  }

  /**
   * Function to GET the list of items
   */
  GetItems() {

    return new Promise((resolve, reject) => {
      if (db !== null) {

        db.get().collection(DBCollection.ITEM).find().toArray()
          .then((res) => {

            resolve(res);
          })
          .catch((error) => {

            return reject(error);
          });

      } else {
        reject('Connection Error');
      }
    });
  }

  /**
   * Function to GET an item.
   * @param itemID ID of the item
   */
  GetItem(itemID) {

    return new Promise((resolve, reject) => {
      if (db !== null) {

        const o_id = new mongo.ObjectID(itemID);

        db.get().collection(DBCollection.ITEM).find({ '_id': o_id }).toArray()
          .then((res) => {

            resolve(res);
          })
          .catch((error) => {

            return reject(error);
          });

      } else {
        reject('Connection Error');
      }
    });
  }

  /**
   * Function to DELETE an item.
   * @param itemID ID of the item
   */
  DeleteItem(itemID) {

    return new Promise((resolve, reject) => {
      if (db !== null) {

        const o_id = new mongo.ObjectID(itemID);

        db.get().collection(DBCollection.ITEM).deleteOne({ '_id': o_id })
          .then((res) => {

            resolve(res);
          })
          .catch((error) => {

            return reject(error);
          });

      } else {
        reject('Connection Error');
      }
    });
  }

  /**
   * Function to UPDATE an item.
   * @param itemID ID of the item
   * @param itemObject
   */
  UpdateItem(itemID, itemObject) {

    return new Promise((resolve, reject) => {
      if (db !== null) {

        const o_id = new mongo.ObjectID(itemID);

        db.get().collection(DBCollection.ITEM).updateOne({ '_id': o_id }, { $set: itemObject.getAsJSON().ItemViewData })
          .then((res) => {

            resolve(res);
          })
          .catch((error) => {

            return reject(error);
          });

      } else {
        reject('Connection Error');
      }
    });
  }

  /**
   * Function to ADD a agent
   */
  AddAgent(agentObject) {

    return new Promise((resolve, reject) => {
      if (db !== null) {

        db.get().collection(DBCollection.AGENT).insertOne(agentObject.getAsJSON().AgentViewData)
          .then((res) => {

            resolve(res);
          })
          .catch((error) => {

            return reject(error);
          });

      } else {
        reject('Connection Error');
      }
    });
  }

  /**
   * Function to UPDATE an item.
   * @param agentID ID of the item
   * @param agentObject
   */
  UpdateAgent(agentID, agentObject) {

    return new Promise((resolve, reject) => {
      if (db !== null) {

        const o_id = new mongo.ObjectID(agentID);

        db.get().collection(DBCollection.AGENT).updateOne({ '_id': o_id }, { $set: agentObject.getAsJSON().AgentViewData})
          .then((res) => {

            resolve(res);
          })
          .catch((error) => {

            return reject(error);
          });

      } else {
        reject('Connection Error');
      }
    });
  }

  /**
   * Function to GET the list of agents
   */
  GetAgents() {

    return new Promise((resolve, reject) => {
      if (db !== null) {

        db.get().collection(DBCollection.AGENT).find().toArray()
          .then((res) => {

            resolve(res);
          })
          .catch((error) => {

            return reject(error);
          });

      } else {
        reject('Connection Error');
      }
    });
  }

    /**
     * Function to ADD a order
     */
    AddOrder(orderObject) {

        return new Promise((resolve, reject) => {
            if (db !== null) {

                let result;
                let agentResult;
                let resultItemQuantityArray = [];

                const o_id = new mongo.ObjectID(orderObject.User_ID);
                const session = db.session();

                session.startTransaction();
                const opts = { session, returnOriginal: false };

                db.get().collection(DBCollection.USER).find({ '_id': o_id }, opts).toArray()
                    .then((findResult) => {

                        if (findResult.length === 0) {

                            return Promise.reject('User ID does not exist');
                        }

                        const registerViewData = new RegisterViewData();
                        registerViewData.setFromJSON(findResult[0]);

                        let region;

                        for(let address in registerViewData.Address) {

                            if(registerViewData.Address[address].Type === orderObject.Delivery_Address_Type) {
                                region = registerViewData.Address[address].State;
                            }
                        }

                      return db.get().collection(DBCollection.AGENT).find({"Availability" : "Y",
                          "Address": {$elemMatch:{"State": region}}}).sort({"Current_Orders": 1}).toArray();
                    })
                    .then((agentRes) => {

                        if (agentRes.length === 0) {
                            return Promise.reject('No agent to assign on this region');
                        }

                        agentResult = agentRes[0];
                        let itemIDObject = [];

                        for(let itemObject in orderObject.Items) {
                           itemIDObject.push(new mongo.ObjectID(orderObject.Items[itemObject]._id));
                        }

                        return db.get().collection(DBCollection.ITEM).find({'_id': {$in : itemIDObject}}).toArray();
                    })
                    .then((itemResult) => {

                        let itemFound = false;
                        let itemQuantity;

                        for(let itemObject in orderObject.Items) {

                            for(let itemResultObject in itemResult) {

                                if(String(itemResult[itemResultObject]._id) === String(orderObject.Items[itemObject]._id))
                                {
                                    itemFound = true;
                                    itemQuantity = itemResult[itemResultObject].Quantity;
                                    break;
                                }
                            }

                            if(itemFound && Number(itemQuantity) >= Number(orderObject.Items[itemObject].Quantity)) {

                                resultItemQuantityArray.push(String(Number(itemQuantity) - Number(orderObject
                                    .Items[itemObject].Quantity)));

                            } else {

                                return Promise.reject('Item not found or has less quantities');
                            }
                        }


                        if(itemResult.length !== orderObject.Items.length) {

                            return Promise.reject('One or more items in the order does not exist');
                        }


                        let trackingID = uuidv4().replace(/-/g, '');

                        orderObject.Agent_ID = agentResult._id;
                        orderObject.Tracking_ID = trackingID;

                       return db.get().collection(DBCollection.ORDER).insertOne(orderObject.getAsJSON().OrderViewData,
                           opts);
                    })
                    .then(() => {

                        let updateItemPromise = [];
                        let itemIndex = 0;

                        for(let itemObject in orderObject.Items) {

                            let updateRes = db.get().collection(DBCollection.ITEM).updateOne({ '_id':
                                    new mongo.ObjectID(orderObject.Items[itemObject]._id)},
                                { $set: {"Quantity": resultItemQuantityArray[itemIndex]}}, opts);

                            updateItemPromise.push(updateRes);

                            itemIndex++;
                        }

                        return Promise.all(updateItemPromise);
                    })
                    .then(() => {

                       return db.get().collection(DBCollection.AGENT).updateOne({"_id": new mongo
                               .ObjectID(agentResult._id)}, {$set: {"Current_Orders": Number(agentResult.Current_Orders)+1}});
                    })
                    .then(() => {

                        return session.commitTransaction();
                    })
                    .then(() => {

                        resolve(result);
                    })
                    .catch((error) => {

                        session.abortTransaction().then(() => {
                            session.endSession();
                        });
                        return reject(error);
                    });
            } else {
                reject('Connection Error');
            }
        });
    }

    /**
     * Function to GET the list of items
     */
    GetOrders() {

        return new Promise((resolve, reject) => {
            if (db !== null) {

                db.get().collection(DBCollection.ORDER).find().toArray()
                    .then((res) => {

                        resolve(res);
                    })
                    .catch((error) => {

                        return reject(error);
                    });

            } else {
                reject('Connection Error');
            }
        });
    }

    /**
     * Function to GET an order.
     * @param orderID ID of the order
     */
    GetOrder(orderID) {

        return new Promise((resolve, reject) => {
            if (db !== null) {

                const o_id = new mongo.ObjectID(orderID);

                db.get().collection(DBCollection.ORDER).find({ '_id': o_id }).toArray()
                    .then((res) => {

                        resolve(res);
                    })
                    .catch((error) => {

                        return reject(error);
                    });

            } else {
                reject('Connection Error');
            }
        });
    }

    /**
     * Function to UPDATE an item.
     * @param orderID ID of the order
     * @param currentStatus current status
     */
    UpdateTrakingStatus(orderID, currentStatus) {

        return new Promise((resolve, reject) => {
            if (db !== null) {

                const o_id = new mongo.ObjectID(orderID);

                db.get().collection(DBCollection.ORDER).updateOne({ '_id': o_id }, { $push: {"Tracking_Status":
                            {$each: currentStatus}}})
                    .then((res) => {

                        resolve(res);
                    })
                    .catch((error) => {

                        return reject(error);
                    });

            } else {
                reject('Connection Error');
            }
        });
    }

}

module.exports = DBClientProxy;