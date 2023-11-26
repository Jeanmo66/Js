let fruits = ["Apple", "Orange", "Plum"];
let arr = ["Apple", { name: 'John' }, true, function () { console.log('Hello'); "Orange", "Plum" } ]
fruits.push('Banane')
console.log(fruits);
arr[3]()
let a = arr[1].name
console.log(a);

for (let i of fruits) {
   console.log(i);
} // ["Apple", "Orange", "Plum", "Banane"]

//Dernier élément d'un tableau
console.log(fruits.at(-1)) // Banane

//Ajoute élément(s) à la fin d'un tableau
console.log(fruits.push("Avocat", "Abricot")) 
console.log(fruits); // ["Apple", "Orange", "Plum", "Banane", "Avocat", "Abricot"]

// Enlève un élément de la fin
fruits.pop()
console.log(fruits);

//Extrait le premier élément du tableau et le renvoie

let f = fruits.shift()
console.log(f);
console.log(fruits);

//Ajoute le premier élément du tableau et le renvoie

let ff = fruits.unshift("Cerise", "Kiwi")
console.log(ff);
console.log(fruits);