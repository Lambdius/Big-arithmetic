'use strict'



export function mul( numA: string, numB: string, result: Array<number> = [] ): string
{
    
    if ( /^-?0+(\.0+)?$/.test(numA) || /^-?0+(\.0+)?$/.test(numB) ) return "0"
    if ( /^\./.test(numA) ) numA = "0" + numA
    if ( /^\./.test(numB) ) numB = "0" + numB

    const sign: string = Number( /^\-/.test(numA) ) + Number( /^\-/.test(numB) ) === 1 ? "-" : "",
          point: number = ( numA.indexOf('.') < 0 ? 0 : (numA.length - numA.indexOf('.') - 1) ) 
                        + ( numB.indexOf('.') < 0 ? 0 : (numB.length - numB.indexOf('.') - 1) )

    numA = numA.replace(/^-?0*|\.?|0*$/g,"")
    numB = numB.replace(/^-?0*|\.?|0*$/g,"")
    
    for ( let i: number = numA.length - 1; i >= 0; i-- )
        for ( let j: number = numB.length - 1; j >= 0; j-- )
        {
            let m: number = Number(numA[ i ]) * Number(numB[ j ]) + ( result[ i + j + 1 ]||0 )
            result[ i + j + 1 ] = m % 10
            result[ i + j ] = ( result[ i + j ]||0 ) + Math.floor( m / 10 )
        }

    if ( point ) {
        const integer: string = result.slice( 0, result.length - point ).join("").replace(/^0+/,"") || "0",
              factorial: string = ( "." + result.slice( -point ).join("") ).replace(/\.?0+$/,"")
        return sign + integer + factorial
    } else {
        return sign + result.join("").replace(/^0+/,"")
    }

}
