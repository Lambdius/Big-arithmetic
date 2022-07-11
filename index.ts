'use strict'



import readline from 'readline'



import { expressionParser } from './src/0_parser'



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



process.stdin.on("keypress",(_,key)=>{
    if ( key.ctrl && key.name == "c" ) process.stdout.write('\u001B[2J\u001B[0;0f')
})



function colorize( expression: Array<string> ): string 
{
    return expression.map( (e) => 
        /-?\d+\.\d+|-?\d+/.test(e) ? "\x1b[32m" + e + "\x1b[0m" : 
        /\(|\)/.test(e) ? "\x1b[33m" + e + "\x1b[0m" : 
        "\x1b[37m" + e + "\x1b[0m"
    ).join(" ")
}



function recursiveQuestion() {
    rl.question( "\x1b[36m>>>\tEnter an expression: \x1b[0m",
        ( expression ) => {
            process.stdout.write('\u001B[2J\u001B[0;0f')
            const lexems: Array<string> = expression.replace(/\d\s?-\d/g,(e)=>[...e].join(" ")).match(/-?\d+\.\d+|-?\d+|[-+\/*()]/g)||[]
            console.log( "\x1b[36m\n>>>\tResult: \x1b[0m" + colorize(lexems) + ' = ' + "\x1b[32m" + expressionParser(lexems) + "\x1b[0m\n" )
            recursiveQuestion()
        }
    )
}

recursiveQuestion()
