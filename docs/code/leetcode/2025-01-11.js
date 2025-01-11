/**
 * @date 2025-01-11
 */
var generateKey = function(num1, num2, num3) {
    let res = 0;
    for(let i=0; i<=4; i++) {
      res += Math.min(
        Math.floor(num1/(10**i)) % 10,
        Math.floor(num2/(10**i)) % 10,
        Math.floor(num3/(10**i)) % 10,
      ) * (10 ** i)
    }

    return res 
};

console.assert(generateKey(1, 10, 1000) === 0, '1, 10, 1000 no pass')
console.assert(generateKey(987, 879, 798) === 777, '987, 879, 798 no pass')
console.log('Accepted!')
