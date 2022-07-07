'use strict'

import { sub }  from './2_subtraction'

function recSub( a: string, b: string ): Array<string>
{
    let intermediate: string = "", 
        count: number = 0;
    
    while ( (intermediate = sub(a,b))[0] !== "-" ) {
        a = intermediate
        count++
    }
    return [ String(count), a ]
}


export function div ( a: string, b: string ): any
{
    let [ intR, fractR ]: Array<string> = [ "", "" ],
        [ intA, fractA = "" ]: Array<string> = a.split("."),
        [ intB, fractB = "" ]: Array<string> = b.split("."),
        remainder: string = "",
        sign: string = Number(/^-/.test(b)) + Number(/^-/.test(a)) === 1 ? "-" : ""

    
    if ( fractA.length < fractB.length ) fractA += "0".repeat( fractB.length - fractA.length )
    if ( fractB.length < fractA.length ) fractB += "0".repeat( fractA.length - fractB.length )
    
    a = intA + fractA
    b = intB + fractB

    ;[ intR, remainder ] = recSub(a,b)

    if ( remainder === "0" ) return sign + intR

    for ( let i: number = 0; i < 20; i++ )
    {
        let [ x, y ] = recSub( remainder + "0", b )
        fractR += x
        remainder = y
    }

    fractR = ( "." + fractR ).replace(/\.(0+)?$/,"")

    return sign + intR + fractR
}