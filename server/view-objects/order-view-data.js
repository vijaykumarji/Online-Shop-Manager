'use strict';

class OrderViewData {

  constructor() {
    this._ID = '';
    this._User_ID = '';
    this._Delivery_Address_Type = '';
    this._Items = [];
    this._Agent_ID = '';
    this._Tracking_ID = '';
    this._Tracking_Status = [];
    this._Total_Items_Amount = '';
  }

  get ID() {
    return this._ID;
  }

  get User_ID() {
    return this._User_ID;
  }

  get Delivery_Address_Type() {
    return this._Delivery_Address_Type;
  }

  get Items() {
    return this._Items;
  }

    get Agent_ID() {
        return this._Agent_ID;
    }


    set Agent_ID(Agent_ID) {
        this._Agent_ID = Agent_ID;
    }

    get Tracking_ID() {
        return this._Tracking_ID;
    }


    set Tracking_ID(Tracking_ID) {
        this._Tracking_ID = Tracking_ID;
    }

    get Tracking_Status() {
        return this._Tracking_Status;
    }


    set Tracking_Status(Tracking_Status) {
        this._Tracking_Status = Tracking_Status;
    }

    get Total_Items_Amount() {
        return this._Total_Items_Amount;
    }


    set Total_Items_Amount(Total_Items_Amount) {
        this._Total_Items_Amount = Total_Items_Amount;
    }

    setFromJSON(jsonObject) {
    if (jsonObject !== undefined && jsonObject !== null && typeof jsonObject === 'object') {

      if (jsonObject.hasOwnProperty('_id')) {
        this._ID = jsonObject[ '_id' ];
      }

      if (jsonObject.hasOwnProperty('User_ID')) {
        this._User_ID = jsonObject[ 'User_ID' ];
      }

      if (jsonObject.hasOwnProperty('Delivery_Address_Type')) {
        this._Delivery_Address_Type = jsonObject[ 'Delivery_Address_Type' ];
      }

      if (jsonObject.hasOwnProperty('Agent_ID')) {
        this._Agent_ID = jsonObject[ 'Agent_ID' ];
      }

      if (jsonObject.hasOwnProperty('Tracking_ID')) {
        this._Tracking_ID = jsonObject[ 'Tracking_ID' ];
      }

      if (jsonObject.hasOwnProperty('Tracking_Status')) {
        let trakingArray = jsonObject[ 'Tracking_Status' ];
          for (let trakingItem in trakingArray) {
              this._Tracking_Status.push(trakingArray[trakingItem]);
          }
      }

      if (jsonObject.hasOwnProperty('Total_Items_Amount')) {
        this._Total_Items_Amount = jsonObject[ 'Total_Items_Amount' ];
      }

      if (jsonObject.hasOwnProperty('Items')) {

        let itemArray = jsonObject[ 'Items' ];

        for (let item in itemArray) {
          this._Items.push(itemArray[item]);
        }
      }
    }
  }

  getAsJSON() {
    let jsonObject = {};
    this.writeToJSON(jsonObject);
    return { 'OrderViewData': jsonObject };
  }

  writeToJSON(jsonObject) {

    if (this._ID) {
      jsonObject._id = this._ID;
    }

    if (this._User_ID) {
      jsonObject.User_ID = this._User_ID;
    }

    if (this._Delivery_Address_Type) {
      jsonObject.Delivery_Address_Type = this._Delivery_Address_Type;
    }

    if (this._Agent_ID) {
      jsonObject.Agent_ID = this._Agent_ID;
    }

    if (this._Tracking_ID) {
      jsonObject.Tracking_ID = this._Tracking_ID;
    }

    if (this._Tracking_Status) {
      jsonObject.Tracking_Status = this._Tracking_Status;
    }

    if (this._Total_Items_Amount) {
      jsonObject.Total_Items_Amount = this._Total_Items_Amount;
    }

    if (this._Items.length > 0) {

      jsonObject.Items = [];

      for (let itemObj in this._Items) {

        let item = {};

        if (this._Items[itemObj].hasOwnProperty('_id')) {
          item._id = this._Items[itemObj]['_id'];
        }

        if (this._Items[itemObj].hasOwnProperty('Name')) {
          item.Name = this._Items[itemObj]['Name'];
        }

        if (this._Items[itemObj].hasOwnProperty('Quantity')) {
          item.Quantity = this._Items[itemObj]['Quantity'];
        }

        if (this._Items[itemObj].hasOwnProperty('Price')) {
          item.Price = this._Items[itemObj]['Price'];
        }

        jsonObject.Items.push(item);
      }
    }


  }

}

module.exports = OrderViewData;