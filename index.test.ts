'use strict'



import { expect } from 'chai'
import { describe, it } from 'mocha'



import { add } from './src/1_addition'
import { sub } from './src/2_subtraction'
import { mul } from './src/3_multiplication'
import { div } from './src/4_division'



const testCases: Array<Array<number>>= [
    [ 1000.1234, 1234.84697, 2234,97037 ]
]



describe('Big arithmetic tests:', function () {

    describe('Small numbers tests:', function () {

        it('Test #1: addition numbers', function () {
    
            for ( let i: number = 0; i < 100; i++ ) 
            {   
                // expect( add( " ", " " ) ).to.equal( " ", 'The addition function doesn\'t work correctly!' )
                // expect( sub( " ", " " ) ).to.equal( " " , 'The subtraction function doesn\'t work correctly!' )
                // expect( mul( String(a) , String(b) ) ).to.equal( String( a * b ), 'The multiplication function doesn\'t work correctly!' )
                // expect( div( String(a) , String(b) ) ).to.equal( String( a * b ), 'The division function doesn\'t work correctly!' )
            }
    
        })

        // it('Test #2: numbers < 1000000', function () {
    
        //     for ( let i: number = 0; i < 100; i++ ) 
        //     {
        //         expect( add( String(a) , String(b) ) ).to.equal( String( a + b ), 'The addition function doesn\'t work correctly!' )
        //         expect( sub( String(a) , String(b) ) ).to.equal( String( a - b ), 'The subtraction function doesn\'t work correctly!' )
        //         expect( mul( String(a) , String(b) ) ).to.equal( String( a * b ), 'The multiplication function doesn\'t work correctly!' )
        //         expect( div( String(a) , String(b) ) ).to.equal( String( a * b ), 'The division function doesn\'t work correctly!' )
        //     }
    
        // })
        
    })

    // describe('Big numbers tests:', function () {

    //     it('Test #1: 100 signs - 250 signs', function () {

    //         for ( let i: number = 0; i < 50; i++ ) 
    //         {
    //             let a: string = [...Array( getrandom( 250, 100 ) )].map( (_) => getrandom(10) ).join(''),
    //                 b: string = [...Array( getrandom( 250, 100 ) )].map( (_) => getrandom(10) ).join('')
        
    //             expect( add( String(a) , String(b) ) ).to.equal( String( BigInt(a) + BigInt(b) ), 'The addition function doesn\'t work correctly!' )
    //             // expect( sub( String(a) , String(b) ) ).to.equal( String( BigInt(a) - BigInt(b) ), 'The subtraction function doesn\'t work correctly!' )
    //             // expect( mul( String(a) , String(b) ) ).to.equal( String( BigInt(a) * BigInt(b) ), 'The multiplication function doesn\'t work correctly!' )
    //         }
    
    //     })

    //     it('Test #2: 250 signs - 500 signs', function () {

    //         for ( let i: number = 0; i < 20; i++ ) 
    //         {
    //             let a: string = [...Array( getrandom( 500, 250 ) )].map( (_) => getrandom(10) ).join(''),
    //                 b: string = [...Array( getrandom( 500, 250 ) )].map( (_) => getrandom(10) ).join('')
        
    //             expect( add( String(a) , String(b) ) ).to.equal( String( BigInt(a) + BigInt(b) ), 'The addition function doesn\'t work correctly!' )
    //             // expect( sub( String(a) , String(b) ) ).to.equal( String( BigInt(a) - BigInt(b) ), 'The subtraction function doesn\'t work correctly!' )
    //             // expect( mul( String(a) , String(b) ) ).to.equal( String( BigInt(a) * BigInt(b) ), 'The multiplication function doesn\'t work correctly!' )
    //         }
    
    //     })

    // })

    // describe('Equal numbers test:', function () {
        
    //     it('Test #1: a = 1000, b = 1000', function () {
    
    //         expect( sub( String(1000) , String(1000) ) ).to.equal( String(1000 - 1000) )
    
    //     })

    // })


    // it('Division tests:', function () {
        
    // })


})
