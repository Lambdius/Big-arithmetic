'use strict'



import { add } from './1_addition'
import { sub } from './2_subtraction'
import { mul } from './3_multiplication'
import { div } from './4_division'



const operators: Array<String> = [ "-", "+", "*", "/" ],
      operations: Array<Function> = [ sub, add, mul, div ],
      priority: Array<number> = [ 1, 1, 2, 2 ]



export function expressionParser ( expression: string ): string 
{
    if ( !expression.trim().length ) return "0"

    let numbersStack: Array<string> = [],
        operatorsStack: Array<string> = [],
        lexems: Array<string> = expression.match(/-?\d+\.\d+|-?\d+|[-+\/*()]/g)||[]

    function calculateLast(): void {
        let operator: string = operatorsStack.pop() || "",
            operands: Array<string> = numbersStack.splice(-2)
        numbersStack.push( operations[ operators.indexOf(operator) ]( ...operands ) )
    }

    for ( let lex of lexems ) {

        let last: string = operatorsStack.at(-1) || ""
        
        if ( /^-?\d+(\.\d+)?$/.test( lex ) ) {
            numbersStack.push( lex )
        } else if ( ( priority[ operators.indexOf(last) ] || 0 ) < priority[ operators.indexOf(lex) ] || lex === "(" || last === "(" ) {
            operatorsStack.push( lex )
        } else if ( lex === ")" ) {
            while ( last !== "(" ) {
                calculateLast()
                last = operatorsStack.at(-1) || ""
            }
            operatorsStack.pop()
        } else {
            calculateLast()
            operatorsStack.push( lex )
        }
        
    }
    
    while ( operatorsStack.length ) calculateLast()
    
    return numbersStack.pop() || "0"
}
