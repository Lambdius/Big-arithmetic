'use strict'



import { add }  from './1_addition'



export function isBigger( numA: string, numB: string ): boolean
{
    if ( numA.length === numB.length ) 
    {
        for ( let i: number = 0; i < numA.length; i++ ) 
        {
            if ( Number(numA[i]) > Number(numB[i]) ) {
                return true
            } else if ( Number(numA[i]) < Number(numB[i]) ) {
                return false
            }
        }
    }
    return numA.length > numB.length
}

export function sub( numA: string, numB: string, c: number = 0, ): string
{
    if ( numA === numB ) return '0'

    if ( /^-?0+(\.0+)?$/.test(numB) ) return numA
    if ( /^-?0+(\.0+)?$/.test(numA) ) return numB[0] === "-" ? numB.replace(/^-/, "") : "-" + numB

    if ( numB[0] === "-" && numA[0] !== "-" ) return add( numA, numB.replace(/^-/, "") )
    if ( numA[0] === "-" && numB[0] !== "-" ) return "-" + add( numA.replace(/^-/, ""), numB )

    let sign: boolean = numA[0] === "-" && numB[0] === "-"

    numA = numA.replace(/^-/, "")
    numB = numB.replace(/^-/, "")

    let [ intR, fractR ]: Array<string> = [ "", "" ],
        [ intA, fractA = "" ]: Array<string> = numA.split("."),
        [ intB, fractB = "" ]: Array<string> = numB.split(".")

    if ( fractA.length < fractB.length ) fractA += "0".repeat( fractB.length - fractA.length )
    if ( fractB.length < fractA.length ) fractB += "0".repeat( fractA.length - fractB.length )

    let reverse: boolean = isBigger( intA + fractA, intB + fractB )

    ;[ intA, fractA, intB, fractB ] = reverse ? [ intA, fractA, intB, fractB ] : [ intB, fractB, intA, fractA ]

    for ( let i: number = 1; i <= fractB.length; i++ ) 
    {
        let d: number = Number( fractA[fractA.length-i] ) - Number( fractB[fractB.length-i] ) - c
        d < 0 ? ( c = 1, fractR = ( 10 - Math.abs(d) ) + fractR ) : ( c = 0, fractR = d + fractR )
    }

    fractR = ( "." + fractR ).replace(/\.(0+)?$/, "")

    for ( let i: number = 1; i <= Math.max(intA.length, intB.length); i++ ) 
    {
        let d: number = ( Number( intA[intA.length-i] ) || 0 ) - ( Number( intB[intB.length-i] ) || 0 ) - c
        d < 0 ? ( c = 1, intR = ( 10 - Math.abs(d) ) + intR ) : ( c = 0, intR = d + intR )
    }

    intR = intR.replace(/^0+/,"") || "0"

    return ( sign && !reverse ? "": sign || !reverse ? "-" : "" ) + intR + fractR
    
}
