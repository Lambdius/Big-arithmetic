'use strict'



import { sub }  from './2_subtraction'



export function add( numA: string, numB: string, c: number = 0 ): string
{
    
    if ( /^-?0+(\.0+)?$/.test( numB ) ) return numA
    if ( /^-?0+(\.0+)?$/.test( numA ) ) return numB

    if ( numB[0] === "-" && numA[0] !== "-" ) return sub( numA, numB.replace(/^-/, "") )
    if ( numA[0] === "-" && numB[0] !== "-" ) return sub( numB, numA.replace(/^-/, "") )

    const sign: string = Number( /^-/.test( numB ) ) + Number( /^-/.test( numA ) ) === 2 ? "-" : ""

    let [ intR, fractR ]: Array<string> = [ "", "" ],
        [ intA, fractA = "" ]: Array<string> = numA.split("."),
        [ intB, fractB = "" ]: Array<string> = numB.split(".")

    if ( fractA.length < fractB.length ) fractA += "0".repeat( fractB.length - fractA.length )
    if ( fractB.length < fractA.length ) fractB += "0".repeat( fractA.length - fractB.length )

    for ( let i: number = 1; i <= fractA.length; i++ ) 
    {
        let [ f, l = "" ] = String( c + ( Number( fractA[fractA.length-i] ) || 0 ) + ( Number( fractB[fractB.length-i] ) || 0 ) )
        l ? ( c = Number( f ), fractR = l + fractR ) : ( c = 0, fractR = f + fractR )
    }

    fractR = ( "." + fractR ).replace(/\.(0+)?$/,"")

    for ( let i: number = 1; i <= Math.max( intA.length, intB.length ) + 1; i++ ) 
    {
        let [ f, l ] = String( c + ( Number( intA[intA.length-i] ) || 0 ) + ( Number( intB[intB.length-i] ) || 0 ) )
        l ? ( c = Number( f ), intR = l + intR ) : ( c = 0, intR = f + intR )
    }

    return sign + ( intR.replace(/^0+/,"") || "0" ) + fractR

}
