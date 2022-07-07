'use strict'

import { add }  from './1_addition'

export function sub( a: string, b: string, c: number = 0, ): string
{

    if ( a === b ) return '0'
    if ( /^-/.test(b) && /^[^-]/.test(a) ) return add( a, b.replace(/^-/,"") )
    if ( /^-/.test(a) && /^[^-]/.test(b) ) return "-" + add( a.replace(/^-/,""), b )

    let sign: boolean = false
    
    if ( a.length === b.length ) 
    {
        for ( let i: number = 0; i < a.length; i++ )
        {
            if ( Number(a[i]) > Number(b[i]) ) {
                sign = true
                break
            } else if ( Number(a[i]) < Number(b[i]) ) {
                break
            }
        }
    } else {
        sign = a.length > b.length
    }
    
    [ a, b ] = sign ? [ a, b ] : [ b, a ]

    let [ intR, fractR ]: Array<string> = [ "", "" ],
        [ intA, fractA = "" ]: Array<string> = a.split("."),
        [ intB, fractB = "" ]: Array<string> = b.split(".")

    if ( fractA.length < fractB.length ) fractA += "0".repeat( fractB.length - fractA.length )
    if ( fractB.length < fractA.length ) fractB += "0".repeat( fractA.length - fractB.length )

    for ( let i: number = 1; i <= fractB.length; i++ ) 
    {
        let d: number = Number(fractA[fractA.length-i]) - Number(fractB[fractB.length-i] ) - c
        d < 0 ? ( c = 1, fractR = ( 10 - Math.abs(d) ) + fractR ) : ( c = 0, fractR = d + fractR )
    }

    fractR = ( "." + fractR ).replace(/\.(0+)?$/,"")

    for ( let i: number = 1; i <= Math.max(intA.length, intB.length); i++ ) 
    {
        let d: number = ( Number( intA[intA.length-i] ) || 0 ) - ( Number( intB[intB.length-i] ) || 0 ) - c
        d < 0 ? ( c = 1, intR = ( 10 - Math.abs(d) ) + intR ) : ( c = 0, intR = d + intR )
    }

    intR = intR.replace(/^0+/,"") || "0"

    return ( !sign || ( /^-/.test(b) && /^-/.test(a) ) ? '-' : '' ) + intR + fractR
    
}
