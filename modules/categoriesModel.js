'use strict';

const schema = require('../schema/categories-schema.js');

const Model = require('./dynamicModel.js');

class Categories extends Model{
    constructor(){
        super(schema)
    }
}

module.exports = Categories ;