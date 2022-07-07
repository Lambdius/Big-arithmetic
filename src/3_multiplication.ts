'use strict'

export function mul (a: string, b: string, r: Array<number> = []): string
{
    
    if ( /^-?0+\.?(0+)?$/.test(a) || /^-?0+\.?(0+)?$/.test(b) ) return "0"
    if ( /^\./.test(a) ) a = "0" + a
    if ( /^\./.test(b) ) b = "0" + b

    const sign: string = Number(/^\-/.test(a)) + Number(/^\-/.test(b)) === 1 ? "-" : "",
          point: number = ( a.indexOf('.') < 0 ? 0 : (a.length - a.indexOf('.') - 1) ) 
                + ( b.indexOf('.') < 0 ? 0 : (b.length - b.indexOf('.') - 1) )

    a=a.replace(/^-?0*|\.?|0*$/g,"")
    b=b.replace(/^-?0*|\.?|0*$/g,"")
    
    for ( let i: number = a.length - 1; i >= 0; i-- )
        for ( let j: number = b.length - 1; j >= 0; j-- )
        {
            let m: number = Number(a[ i ]) * Number(b[ j ]) + ( r[ i + j + 1 ]||0 )
            r[ i + j + 1 ] = m % 10
            r[ i + j ] = ( r[ i + j ]||0 ) + Math.floor( m / 10 )
        }

    if ( point ) {
        const integer: string = r.slice(0,r.length-point).join("").replace(/^0+/,"")||"0",
              factorial: string = ( "." + r.slice(-point).join("") ).replace(/\.?0+$/,"")
        return sign + integer + factorial
    } else {
        return sign + r.join("").replace(/^0+/,"")
    }

}
