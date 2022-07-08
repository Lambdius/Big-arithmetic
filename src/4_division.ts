'use strict'



import { add }  from './1_addition'
import { isBigger, sub }  from './2_subtraction'
import { mul }  from './3_multiplication'



function nSlice( numA: string, numB: string ): Array<string>
{
    let result: string = "1",
        temp: string = mul( numB, "2" )

    while ( !isBigger( temp, numA ) ) 
    {
        result = mul( result, "2" )
        numB = temp
        temp = mul( numB, "2" )
    }

    return [ numB, result ]
}

function recSub( a: string, b: string ): Array<string>
{
    let intermediate = "", 
        count = 0
    while ( ( intermediate = sub( a, b ) )[0] !== "-" ) {
        a = intermediate
        count++
    }
    return [ String(count), a ]
}

export function div( numA: string, numB: string ): string 
{
    if ( /^-?0+\.?(0+)?$/.test(numB) ) throw Error();
    if ( /^-?0+\.?(0+)?$/.test(numA) ) return "0"

    const sign: string = Number( numA[0] === "-" ) + Number( numB[0] === "-" ) === 1 ? "-" : ""

    numA = numA.replace(/^-/,"")
    numB = numB.replace(/^-/,"")

    let [ intR, fractR ] = [ "0", "" ],
        [ intA, fractA = "" ] = numA.split("."),
        [ intB, fractB = "" ] = numB.split("."),
        remainder = ""

    if ( fractA.length < fractB.length ) fractA += "0".repeat( fractB.length - fractA.length )
    if ( fractB.length < fractA.length ) fractB += "0".repeat( fractA.length - fractB.length )

    numA = ( intA + fractA ).replace(/^0+/, "")
    numB = ( intB + fractB ).replace(/^0+/, "")

    let [ numX, localRes ]: Array<string> = nSlice( numA, numB )

    while ( !isBigger( numX, numA ) ) {
        intR = add( intR, localRes )
        numA = sub( numA, numX )
        ;[ numX, localRes ] = nSlice( numA, numB )
    }

    remainder = numA

    for ( let i = 0; i < 20; i++ ) {
        let [ x, y ] = recSub( remainder + "0", numB )
        if ( remainder === "0" ) return sign + intR + ( "." + fractR ).replace(/\.(0+)?$/,"")
        fractR += x
        remainder = y
    }

    fractR = ( "." + fractR ).replace(/\.?(0+)?$/,"")

    return sign + intR + fractR
}
