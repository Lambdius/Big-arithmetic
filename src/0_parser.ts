'use strict'



import { add } from './1_addition'
import { sub } from './2_subtraction'
import { mul } from './3_multiplication'
import { div } from './4_division'



export function expressionParser ( lexems: Array<string> ): string
{

    const curr   = ( ): string                                 => lexems[0] || "",
          next   = ( ): string                                 => lexems.shift() || "",
          incl   = ( ...tokens: Array<string> ): boolean       => tokens.includes( curr() ),
          calc   = ( token: string, action: Function ): string => incl( token ) && next() && action()
          
    const brackets = ( ): string => {
          next()
          const res: string = priorityB()
          next()
          return res
    }

    const prefix = ( ): string => {
          next()
          const res: string = nonInfix()
          if( /^-/.test(res) ) return res.slice(1)
          return "-" + res
    }

    const nonInfix = ( ): string => 
          incl( "(" )     ? brackets() : 
          incl( "-" )     ? prefix()   : 
          next()

    const priorityA = ( r = nonInfix() ): string => 
          incl( "*", "/" ) ? ( 
                calc( "*", () => r = mul( r, nonInfix() ) ), 
                calc( "/", () => r = div( r, nonInfix() ) ),
                priorityA( r )
          ) : r
            
    const priorityB = ( r = priorityA() ): string => 
          incl( "+", "-" ) ? (
                calc( "+", () => r = add( r, priorityA() ) ),
                calc( "-", () => r = sub( r, priorityA() ) ),
                priorityB( r )
          ) : r 

    return priorityB()
    
}
