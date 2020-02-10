'use strict' ;

const mongoose = require('mongoose');

const Categories = require('./modules/categoriesModel.js');
const Products = require('./modules/productModel.js');
const pro = require('./schema/product-schema')

const MONGOOSE_URI = 'mongodb://localhost:27017/categoryproductdb';

mongoose.connect(MONGOOSE_URI , { useNewUrlParser : true});



////////// test throw model  and be sure from mongo db ////////

// let shoes = new Categories ;
// let boats = new Products ;

// shoes.create({name :"shoes"  })
// boats.create({ name:"Puma", thePrice: 100 , categoryType:"shoes"})


// const clothes = new Categories({ name: 'clothes', description: 'desssssssss2222s'});

// clothes.save();

///////// test throw schema and be sure from mongo db ///////////
// const dress = new pro({ name: 'dress11', thePrice:'452222', categoryType: 'dress'});

// dress.save();
