
/* function wait(duration) {
    const t = Date.now()
    while (Date.now() - t < duration) {
    }
} */

/* setTimeout(() => {
    console.log('Hello');

    setTimeout(()=>{
        console.log('Bonjour');
        setTimeout(()=>{
            console.log('Bonsoir');
        }, 2000)
    }, 4000)
    
},6000) */

/* console.log('Bonjour');
wait(2000)
console.log('les gens'); */

//t = setInterval(() => console.log("Hello"), 2000)


/* console.log('Bonjour')
const t = setTimeout(() => console.log('tout le monde!'), 3000)
 
console.log('Au revoir!')
console.log(t) */
/*  let numberOfDisplay = prompt('Combien de fois souhaitez-vous afficher le message?') */



//Afficher 5 fois à un interaval de 2s */
/* let i = 0
const t = setInterval(() => {/
    i++
    console.log(' A vous de jouer ')
    if( i >= 5) {
        clearInterval(t)
    }
}, 2000) */

// Compte à rebourt à partir d'une valeur
/* function decompte(n) {
    console.log(n)
    if (n === 0) {
        return
    }
    setTimeout(() => {
        decompte(n - 1)
    }, 1000)
}
decompte(3) */