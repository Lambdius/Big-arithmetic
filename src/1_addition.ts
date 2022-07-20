"use strict";


import { sub }  from "./2_subtraction";


export function add( numA: string, numB: string ): string
{
    let c = 0;
    if ( /^-?0+(\.0+)?$/.test( numB ) ) {
        return numA;
    }
    if ( /^-?0+(\.0+)?$/.test( numA ) ) {
        return numB;
    }
    if ( numB.startsWith("-") && !numA.startsWith("-") ) {
        return sub( numA, numB.replace(/^-/, "") );
    }
    if ( numA.startsWith("-") && !numB.startsWith("-") ) {
        return sub( numB, numA.replace(/^-/, "") );
    }

    const sign: string = Number( numB.startsWith("-") ) + Number( numA.startsWith("-") ) === 2 ? "-" : "";

    let [ intR, fractR ]: Array<string> = [ "", "" ],
        // eslint-disable-next-line prefer-const
        [ intA, fractA = "" ]: Array<string> = numA.split("."),
        // eslint-disable-next-line prefer-const
        [ intB, fractB = "" ]: Array<string> = numB.split(".");

    if ( fractA.length < fractB.length ) fractA += "0".repeat( fractB.length - fractA.length );
    if ( fractB.length < fractA.length ) fractB += "0".repeat( fractA.length - fractB.length );

    for ( let i = 1; i <= fractA.length; i++ )
    {
        const [ f, l = "" ] = String( c + ( Number( fractA[fractA.length - i] ) || 0 ) + ( Number( fractB[fractB.length - i] ) || 0 ) );
        l ? ( c = Number( f ), fractR = l + fractR ) : ( c = 0, fractR = f + fractR );
    }

    fractR = ( "." + fractR ).replace(/\.(0+)?$/,"");

    for ( let i = 1; i <= Math.max( intA.length, intB.length ) + 1; i++ )
    {
        const [ f, l ] = String( c + ( Number( intA[intA.length - i] ) || 0 ) + ( Number( intB[intB.length - i] ) || 0 ) );
        l ? ( c = Number( f ), intR = l + intR ) : ( c = 0, intR = f + intR );
    }

    return sign + ( intR.replace(/^0+/,"") || "0" ) + fractR;
}
