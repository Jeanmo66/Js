/** Ecriture classique */
function sum1(a, b) {
    return a + b
}
console.log(sum1(15, 7))
/** Ecriture affectation à une variable */
const sum = function (a, b) {
    return a + b
}
result = sum(20, 30)
console.log(result)

/** Ecriture fléchée*/
let sum2 = (a, b) => a + b
console.log(sum2(35, 25))

i = 3 
while (i) {
    console.log(i)
    i--
}

i = 3 
while (i)  (i--)
console.log(i)