
function main () {
    var A = {
        print: function() {
            console.log('A.print')
        }
    }

    var B = Object.create(A)

    console.log(Object.getPrototypeOf(B) === A)
    B.print()
}





