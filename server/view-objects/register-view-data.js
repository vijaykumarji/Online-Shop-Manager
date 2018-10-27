'use strict';

class RegisterViewData {

  constructor() {
    this._Name = '';
    this._Email = '';
    this._Passord = '';
    this._Role = '';
    this._address = [];
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

  get Password() {
    return this._Passord;
  }


  set Password(Password) {
    this._Passord = Password;
  }

  get Role() {
    return this._Role;
  }


  set Role(Role) {
    this._Role = Role;
  }

  get Address() {
    return this._address;
  }

  setFromJSON(jsonObject) {
    if (jsonObject !== undefined && jsonObject !== null && typeof jsonObject === 'object') {

      if (jsonObject.hasOwnProperty('Name')) {
        this._Name = jsonObject[ 'Name' ];
      }

      if (jsonObject.hasOwnProperty('Email')) {
        this._Email = jsonObject[ 'Email' ];
      }

      if (jsonObject.hasOwnProperty('Password')) {
        this._Passord = jsonObject[ 'Password' ];
      }

      if (jsonObject.hasOwnProperty('Role')) {
        this._Role = jsonObject[ 'Role' ];
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
    return { 'RegisterViewData': jsonObject };
  }

  writeToJSON(jsonObject) {

    if (this._Name) {
      jsonObject.Name = this._Name;
    }

    if (this._Email) {
      jsonObject.Email = this._Email;
    }

    if (this._Passord) {
      jsonObject.Password = this._Passord;
    }

    if (this._Role) {
      jsonObject.Role = this._Role;
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

module.exports = RegisterViewData;