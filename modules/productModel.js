'use strict';

const schema = require('../schema/product-schema.js');

const Model = require('./dynamicModel.js');

class Products extends Model{
    constructor(){
        super(schema);
    }
}

module.exports = Products;