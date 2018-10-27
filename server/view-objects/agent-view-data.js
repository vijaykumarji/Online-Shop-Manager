'use strict';

class AgentViewData {

  constructor() {
    this._ID = '';
    this._Name = '';
    this._Email = '';
    this._Mobile_No = '';
    this._Availability = '';
    this._Current_Orders = '';
    this._address = [];
  }

  get ID() {
    return this._ID;
  }

  get Name() {
    return this._Name;
  }

  set Name(Name) {
    this._Name = Name;
  }

  get Email() {
    return this._Email;
  }

  set Email(Name) {
    this._Name = Name;
  }

  get Mobile_No() {
    return this._Mobile_No;
  }

  set Mobile_No(Mobile_No) {
    this._Mobile_No = Mobile_No;
  }

  get Availability() {
    return this._Availability;
  }


  set Availability(Availability) {
    this._Availability = Availability;
  }

  get Current_Orders() {
    return this._Current_Orders;
  }


  set Current_Orders(Current_Orders) {
    this._Current_Orders = Current_Orders;
  }


  setFromJSON(jsonObject) {
    if (jsonObject !== undefined && jsonObject !== null && typeof jsonObject === 'object') {

      if (jsonObject.hasOwnProperty('_id')) {
        this._ID = jsonObject[ '_id' ];
      }

      if (jsonObject.hasOwnProperty('Name')) {
        this._Name = jsonObject[ 'Name' ];
      }

      if (jsonObject.hasOwnProperty('Email')) {
        this._Email = jsonObject[ 'Email' ];
      }

      if (jsonObject.hasOwnProperty('Mobile_No')) {
        this._Mobile_No = jsonObject[ 'Mobile_No' ];
      }

      if (jsonObject.hasOwnProperty('Availability')) {
        this._Availability = jsonObject[ 'Availability' ];
      }

      if (jsonObject.hasOwnProperty('Current_Orders')) {
        this._Current_Orders = jsonObject[ 'Current_Orders' ];
      }

      if (jsonObject.hasOwnProperty('Address')) {

        let addressArray = jsonObject[ 'Address' ];

        for (let address in addressArray) {
          this._address.push(addressArray[address]);
        }
      }
    }
  }

  getAsJSON() {
    let jsonObject = {};
    this.writeToJSON(jsonObject);
    return { 'AgentViewData': jsonObject };
  }

  writeToJSON(jsonObject) {

    if (this._ID) {
      jsonObject._id = this._ID;
    }

    if (this._Name) {
      jsonObject.Name = this._Name;
    }

    if (this._Email) {
      jsonObject.Email = this._Email;
    }

    if (this._Mobile_No) {
      jsonObject.Mobile_No = this._Mobile_No;
    }

    if (this._Availability) {
      jsonObject.Availability = this._Availability;
    }

    if (this._Current_Orders) {
      jsonObject.Current_Orders = this._Current_Orders;
    }

    if (this._address.length > 0) {

      jsonObject.Address = [];

      for (let addrss in this._address) {

        let item = {};

        if (this._address[addrss].hasOwnProperty('Type')) {
          item.Type = this._address[addrss]['Type'];
        }

        if (this._address[addrss].hasOwnProperty('Flat_No')) {
          item.Flat_No = this._address[addrss]['Flat_No'];
        }

        if (this._address[addrss].hasOwnProperty('Street')) {
          item.Street = this._address[addrss]['Street'];
        }

        if (this._address[addrss].hasOwnProperty('City')) {
          item.City = this._address[addrss]['City'];
        }

        if (this._address[addrss].hasOwnProperty('State')) {
          item.State = this._address[addrss]['State'];
        }

        if (this._address[addrss].hasOwnProperty('Country')) {
          item.Country = this._address[addrss]['Country'];
        }

        if (this._address[addrss].hasOwnProperty('PinCode')) {
          item.PinCode = this._address[addrss]['PinCode'];
        }

        jsonObject.Address.push(item);
      }
    }


  }

}

module.exports = AgentViewData;