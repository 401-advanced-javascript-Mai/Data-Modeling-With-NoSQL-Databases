'use strict';

require('@code-fellows/supergoose');

const Categories = require('../modules/categoriesModel.js');

const Products = require('../modules/productModel');


describe( 'Categories model ' ,()=>{
  const categ = new Categories() ; 
    it( 'get() cstegory ' , ()=>{

        let data = {name : "shoes"}
        return categ.create(data)
        .then( result =>{
            // console.log('result', result)
            return categ.get(result._id)
            .then (item =>{
                // console.log('item', item)
                Object.keys(data).forEach(element=>{
                    // console.log('element', element)
                    // console.log('item[element]', item[element])
                    expect(item.element).toEqual(data.element);
                })
            })
        })
    })
    it( 'create() a new category ' , () =>{
        let data = {name : "shoes"}
        return categ.create(data)
        .then( result =>{
            Object.keys(data).forEach(element=>{
                expect(result.element).toEqual(data.element)

            })
    })
})
it(' update category' , ()=>{
    let data = {name : "shoes"}
    
    
    return categ.create(data)
    .then( result =>{
        let newData = {name : "skirt"}
        // console.log('result 111', result)
        return categ.update(result._id , newData)
        .then(result =>{

            // console.log('result222' , result)
            expect(newData.name).toEqual(result.name)
        })
    })

})
it( ' delete() category ',() =>{
    let data = {name : "shoes"}
    return categ.create(data)
    .then( result =>{
     console.log('result 111', result)

        return categ.delete(result._id )
        .then(data2 =>{
            return categ.get(data2._id)
            .then(result =>{

            expect(result.name).toBe(undefined);
            })
        })

    })
})
})


describe( 'products model ' ,()=>{
    const prod = new Products() ; 
      it( 'get() product ' , ()=>{
  
          let data = {name : "puma" , thePrice : 100 , categoryType : "shoes"}
          return prod.create(data)
          .then( result =>{
            //   console.log('result', result)
              return prod.get(result._id)
              .then (item =>{
                  // console.log('item', item)
                  Object.keys(data).forEach(element=>{
                      // console.log('element', element)
                      // console.log('item[element]', item[element])
                      expect(item.element).toEqual(data.element);
                  })
              })
          })
      } )

      it( 'create() a new product ' , () =>{
        let data = {name : "puma" , thePrice : 100 , categoryType : "shoes"}
        return prod.create(data)
        .then( result =>{
            Object.keys(data).forEach(element=>{
                expect(result.element).toEqual(data.element)

            })
    })
})

it(' update() product' , ()=>{
    let data = {name : "puma" , thePrice : 100 , categoryType : "shoes"}
    
    
    return prod.create(data)
    .then( result =>{
        let newData = {name : "niki" , thePrice : 110 , categoryType : "shoes"}
        // console.log('result 111', result)
        return prod.update(result._id , newData)
        .then(result =>{

            // console.log('result222' , result)
            expect(newData.name).toEqual(result.name)
        })
    })

})
it( ' delete() product ',() =>{
    let data = {name : "niki" , thePrice : 110 , categoryType : "shoes"}
    return prod.create(data)
    .then( result =>{
     console.log('result 111', result)

        return prod.delete(result._id )
        .then(data2 =>{
            return prod.get(data2._id)
            .then(result =>{

            expect(result.name).toBe(undefined);
            })
       
            })
                })7
  })
})
