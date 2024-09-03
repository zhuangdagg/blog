import { parseArgs } from 'node:util'

const {
    values,
    positionals
} = parseArgs({
    // args: ['-i', '--prod', '-f', 'cjs'],
    allowPositionals: true,
    options: {
        format: {
            type: 'string',
            short: 'f',
            default: 'mjs'
        },
        prod: {
            type: 'boolean',
            short: 'p',
            default: false
        },
        inline: {
            type: 'boolean',
            short: 'i',
            default: false
        }
    }
})

// $> node xxx.js -f 'cjs' --prod file
console.log(values, positionals)
// [Object: null prototype] {
//  format: 'cjs',
//  prod: false,
//  inline: false
// } ['file']