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



function colorize( expression: string ): string 
{
    return ( expression.match(/-?\d+\.\d+|-?\d+|[-+\/*()]/g) || [] ).map( (e) => 
        /-?\d+\.\d+|-?\d+/.test(e) ? "\x1b[32m" + e + "\x1b[0m" : 
        /\(|\)/.test(e) ? "\x1b[33m" + e + "\x1b[0m" : 
        "\x1b[37m" + e + "\x1b[0m").join(" ")
}



function recursiveQuestion() {
    rl.question( "\x1b[36m>>>\tEnter an expression: \x1b[0m",
        ( expression ) => {
            process.stdout.write('\u001B[2J\u001B[0;0f')
            expression = (expression.replace(/\d-\d/g,(e)=>[...e].join(" ")).match(/-?\d+\.\d+|-?\d+|[-+\/*()]/g) || []).join(" ")
            console.log( "\x1b[36m\n>>>\tResult: \x1b[0m" + colorize(expression) + ' = ' + "\x1b[32m" + expressionParser(expression) + "\x1b[0m\n" )
            recursiveQuestion()
        }
    )
}

recursiveQuestion()
