"use strict";


import { add }  from "./1_addition";


export function isBigger( numA: string, numB: string ): boolean
{
    if ( numA.length === numB.length ) {
        for ( let i = 0; i < numA.length; i++ )
        {
            if ( Number(numA[i]) > Number(numB[i]) ) {
                return true;
            } else if ( Number(numA[i]) < Number(numB[i]) ) {
                return false;
            }
        }
    }
    return numA.length > numB.length;
}

export function sub( numA: string, numB: string ): string
{
    let c = 0;

    if ( numA === numB ) {
        return "0";
    } else if ( /^-?0+(\.0+)?$/.test(numB) ) {
        return numA;
    } else if ( /^-?0+(\.0+)?$/.test(numA) ) {
        return numB.startsWith("-") ? numB.replace(/^-/, "") : "-" + numB;
    } else if ( numB.startsWith("-") && !numA.startsWith("-") ) {
        return add( numA, numB.replace(/^-/, "") );
    } else if ( numA.startsWith("-") && !numB.startsWith("-") ) {
        return "-" + add( numA.replace(/^-/, ""), numB );
    }

    const sign: boolean = numA.startsWith("-") && numB.startsWith("-");

    [ numA, numB ] = [ numA.replace(/^-/, ""), numB.replace(/^-/, "") ];

    let [ intR, fractR ]: Array<string> = [ "", "" ],
        [ intA, fractA = "" ]: Array<string> = numA.split("."),
        [ intB, fractB = "" ]: Array<string> = numB.split(".");

    if ( fractA.length < fractB.length ) {
        fractA += "0".repeat( fractB.length - fractA.length );
    } else if ( fractB.length < fractA.length ) {
        fractB += "0".repeat( fractA.length - fractB.length );
    }

    const reverse: boolean = isBigger( intA + fractA, intB + fractB )

    ;[ intA, fractA, intB, fractB ] = reverse ? [ intA, fractA, intB, fractB ] : [ intB, fractB, intA, fractA ];

    for ( let i = 1; i <= fractB.length; i++ )
    {
        const d: number = Number( fractA[fractA.length - i] ) - Number( fractB[fractB.length - i] ) - c;
        d < 0 ? ( c = 1, fractR = ( 10 - Math.abs(d) ) + fractR ) : ( c = 0, fractR = d + fractR );
    }

    fractR = ( "." + fractR ).replace(/\.(0+)?$/, "");

    for ( let i = 1; i <= Math.max(intA.length, intB.length); i++ )
    {
        const d: number = ( Number( intA[intA.length - i] ) || 0 ) - ( Number( intB[intB.length - i] ) || 0 ) - c;
        d < 0 ? ( c = 1, intR = ( 10 - Math.abs(d) ) + intR ) : ( c = 0, intR = d + intR );
    }

    intR = intR.replace(/^0+/,"") || "0";

    return ( sign && !reverse ? "" : sign || !reverse ? "-" : "" ) + intR + fractR;

}
