"use strict"

function test() {
    if(true) {
        console.log('in if block')
        function f() {
            return '666'
        }
    
        f()
    }
    console.log('test finish')
}

test()
