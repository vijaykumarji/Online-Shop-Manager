'use strict';

class ItemViewData {

    constructor() {
        this._ID = '';
        this._Category = '';
        this._Sub_Category = '';
        this._Name = '';
        this._Quantity = '';
        this._Price = '';
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

    get Category() {
        return this._Category;
    }

    set Category(Category) {
        this._Category = Category;
    }

    get Sub_Category() {
        return this._Sub_Category;
    }


    set Sub_Category(Sub_Category) {
        this._Sub_Category = Sub_Category;
    }

    get Quantity() {
        return this._Quantity;
    }


    set Quantity(Quantity) {
        this._Quantity = Quantity;
    }

    get Price() {
        return this._Price;
    }


    set Price(Price) {
        this._Price = Price;
    }


    setFromJSON(jsonObject) {
        if (jsonObject !== undefined && jsonObject !== null && typeof jsonObject === 'object') {

            if (jsonObject.hasOwnProperty('_id')) {
                this._ID = jsonObject[ '_id' ];
            }

            if (jsonObject.hasOwnProperty('Category')) {
                this._Category = jsonObject[ 'Category' ];
            }

            if (jsonObject.hasOwnProperty('Sub_Category')) {
                this._Sub_Category = jsonObject[ 'Sub_Category' ];
            }

            if (jsonObject.hasOwnProperty('Name')) {
                this._Name = jsonObject[ 'Name' ];
            }

            if (jsonObject.hasOwnProperty('Quantity')) {
                this._Quantity = jsonObject[ 'Quantity' ];
            }

            if (jsonObject.hasOwnProperty('Price')) {
                this._Price = jsonObject[ 'Price' ];
            }
        }
    }

    getAsJSON() {
        let jsonObject = {};
        this.writeToJSON(jsonObject);
        return { 'ItemViewData' : jsonObject };
    }

    writeToJSON(jsonObject) {

        if (this._ID) {
            jsonObject._id = this._ID;
        }

        if (this._Category) {
            jsonObject.Category = this._Category;
        }

        if (this._Sub_Category) {
            jsonObject.Sub_Category = this._Sub_Category;
        }

        if (this._Name) {
            jsonObject.Name = this._Name;
        }

        if (this._Quantity) {
            jsonObject.Quantity = this._Quantity;
        }

        if (this._Price) {
            jsonObject.Price = this._Price;
        }

    }

}

module.exports = ItemViewData;