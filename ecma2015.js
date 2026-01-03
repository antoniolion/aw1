/****************************************************
 * DEMO PRINCIPALI FUNZIONALITÀ JAVASCRIPT
 * ECMAScript 5 (ES5) + ECMAScript 2015 (ES6)
 ****************************************************/

console.log("=== VARIABILI E TIPI ===");
// ES5: var (scope di funzione)
var nome = "Mario";
// ES6: let (scope di blocco) e const (costante)
let eta = 30;
const PI = 3.14159;

console.log(nome, eta, PI);

// Tipi primitivi
let numero = 42;           // Number
let testo = "Ciao";        // String le string sono immutabili 
let booleano = true;       // Boolean
let nullo = null;          // Null
let indefinito;            // Undefined
let simbolo = Symbol("id"); // Symbol (ES6)

console.log(typeof numero, typeof testo, typeof simbolo);

console.log("\n=== OPERATORI ===");
console.log(5 + 3, 5 === "5", 5 == "5"); // === confronto stretto, == confronto debole
// il simbolo = assegna nel caso delle primitive ( oggetto diverso rispetto a quello assegnato, diverso riferimento, stesso valore, 
// se faccio operazione di uguaglianza fra due primitive diverse è falsy)

console.log("\n=== FUNZIONI ===");
// ES5: funzione classica
function somma(a, b) {
    return a + b;
}
console.log("Somma:", somma(2, 3));

// ES6: arrow function
const moltiplica = (a, b) => a * b;
console.log("Moltiplica:", moltiplica(4, 5));

console.log("\n=== OGGETTI ===");
// ES5: creazione oggetto
var persona = {
    nome: "Luca",
    eta: 25,
    saluta: function() {
        console.log("Ciao, sono " + this.nome);
    }
};
persona.saluta();

// la funzione è anche lei un oggetto
// il simbolo = assegna nel caso degli oggetti *(stesso oggetto di quello assegnato, stesso riferimento)
// se faccio uguaglianza fra due oggetti asseganti fra loro darà truthy


// ES6: shorthand properties e metodi
let nomeUtente = "Anna";
let etaUtente = 28;
let utente = {
    nomeUtente,
    etaUtente,
    saluta() {
        console.log(`Ciao, sono ${this.nomeUtente}`);
    }
};
utente.saluta();

console.log("\n=== ARRAY E METODI ===");
let numeri = [1, 2, 3, 4, 5];
numeri.forEach(n => console.log("Elemento:", n));
let doppi = numeri.map(n => n * 2);
console.log("Doppi:", doppi);
let pari = numeri.filter(n => n % 2 === 0);
console.log("Pari:", pari);
let sommaTot = numeri.reduce((acc, n) => acc + n, 0);
console.log("Somma totale:", sommaTot);

console.log("\n=== DESTRUTTURAZIONE (ES6) ===");
let [primo, secondo] = numeri;
console.log("Primi due:", primo, secondo);
let { nomeUtente: nomeEstratto } = utente;
console.log("Nome estratto:", nomeEstratto);

console.log("\n=== TEMPLATE LITERALS (ES6) ===");
let messaggio = `Ciao ${nomeUtente}, hai ${etaUtente} anni.`;
console.log(messaggio);

console.log("\n=== CLASSI (ES6) ===");
class Animale {
    constructor(nome) {
        this.nome = nome;
    }
    parla() {
        console.log(`${this.nome} emette un suono.`);
    }
}
class Cane extends Animale {
    parla() {
        console.log(`${this.nome} abbaia!`);
    }
}
let cane = new Cane("Fido");
cane.parla();

console.log("\n=== MODULI (ES6) ===");
// In un file reale: export/import
// Qui simuliamo con una funzione
const modulo = (() => {
    const segreto = "dato privato";
    return {
        mostraSegreto: () => console.log(segreto)
    };
})();
modulo.mostraSegreto();

console.log("\n=== PROMISE E ASYNC/AWAIT (ES6+) ===");
function attesa(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function esempioAsync() {
    console.log("Attendo 1 secondo...");
    await attesa(1000);
    console.log("Fatto!");
}
esempioAsync();

console.log("\n=== MAP E SET (ES6) ===");
let mappa = new Map();
mappa.set("chiave", "valore");
console.log("Mappa:", mappa.get("chiave"));

let insieme = new Set([1, 2, 2, 3]);
console.log("Set:", [...insieme]);

console.log("\n=== SPREAD E REST (ES6) ===");
let arr1 = [1, 2];
let arr2 = [3, 4];
let unito = [...arr1, ...arr2];
console.log("Array unito:", unito);

function sommaVariabile(...numeri) {
    return numeri.reduce((acc, n) => acc + n, 0);
}
console.log("Somma variabile:", sommaVariabile(1, 2, 3, 4));


// copie
// shallow copy fa una copia del primo livello di un oggetto
let arr3_1=[2,3];
console .log(arr3_1);
let arr3= [1,arr3_1];
console.log(arr3);// console log ha una depth limit che è definita nell engine enviroment (Node, V8 ecc)
let arr4= Array.from(arr3); 
console.log(arr4);// dovrebbe restituire [1, undefined?]
// deep copy fa una copia completa


/**
 * for...in vs for...of in JavaScript
 *
 * for...in  → Iterates over the enumerable property KEYS (names) of an object.
 * for...of  → Iterates over the VALUES of an iterable object (like arrays, strings, maps, sets).
 *
 * Key Points:
 * - Use for...in for objects when you need property names (keys).
 * - Use for...of for arrays, strings, maps, sets when you need values.
 * - for...in can also iterate over inherited properties from the prototype chain.
 * - for...of works only on iterable objects (must have [Symbol.iterator]).
 */

// Example 1: Using for...in with an object
const person = {
    name: "Alice",
    age: 25,
    city: "Rome"
};

console.log("=== for...in with Object (keys) ===");
for (let key in person) {
    if (person.hasOwnProperty(key)) { // Avoid inherited properties
        console.log(`Key: ${key}, Value: ${person[key]}`);
    }
}

// Example 2: Using for...of with an array
const numbers = [10, 20, 30];

console.log("\n=== for...of with Array (values) ===");
for (let value of numbers) {
    console.log(`Value: ${value}`);
}

// Example 3: Difference when used on arrays
console.log("\n=== for...in with Array (indexes) ===");
for (let index in numbers) {
    console.log(`Index: ${index}, Value: ${numbers[index]}`);
}

console.log("\n=== for...of with Array (values) ===");
for (let value of numbers) {
    console.log(`Value: ${value}`);
}

// Example 4: for...of with a string
const text = "JS";

console.log("\n=== for...of with String (characters) ===");
for (let char of text) {
    console.log(`Character: ${char}`);
}

// Example 5: for...of with Map
const myMap = new Map([
    ["a", 1],
    ["b", 2]
]);

console.log("\n=== for...of with Map (entries) ===");
for (let [key, value] of myMap) {
    console.log(`Key: ${key}, Value: ${value}`);
}

/**
 * Summary:
 * - for...in → keys (object properties, including array indexes)
 * - for...of → values (iterable elements)
 */
