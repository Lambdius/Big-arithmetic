"use strict";


import { createInterface } from "readline";

import { expressionParser } from "./0_parser";


const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});


process.stdin.on( "keypress", ( _, key ) => {
    if ( key.ctrl && key.name == "c" ) {
        process.stdout.write( "\u001B[2J\u001B[0;0f" );
    }
});


function colorize( expression: Array<string> ): string
{
    return expression.map( ( lexem: string ): string =>
        ( /-?\d+\.\d+|-?\d+/.test(lexem) ? `\x1b[32m${lexem}\x1b[0m` : /\(|\)/.test(lexem) ? `\x1b[33m${lexem}\x1b[0m` : `\x1b[37m${lexem}\x1b[0m` )
    ).join(" ");
}

function recursiveQuestion() {
    readline.question( "\x1b[36m>>>\tEnter an expression: \x1b[0m",
        ( expression: string ): void => {
            process.stdout.write( "\u001B[2J\u001B[0;0f" );
            const lexems: Array<string> = expression.replace(/\d\s?-\d/g, e => [...e].join(" ")).match(/-?\d+\.\d+|-?\d+|[-+/*()]/g) || [];
            console.log( "\x1b[36m\n>>>\tResult: \x1b[0m" + colorize(lexems) + " = \x1b[32m" + expressionParser(lexems) + "\x1b[0m\n" );
            recursiveQuestion();
        }
    );
}

recursiveQuestion();
