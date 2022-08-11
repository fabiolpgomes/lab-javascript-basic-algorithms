// Iteration 1: Names and Input

const hacker1 = "Fabio" ;
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "JINO";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.ou `);
} else if 
    (hacker1.length < hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.ou `);
} else {
    (hacker1.length === hacker2.length)
    console.log(`Wow, you both have equally long names, it has ${hacker1.length} characters.ou `);
}


// Iteration 3: Loops

const driveUpp = hacker1.toUpperCase();
console.log(driveUpp.split('')); 
const driveSplit = driveUpp.split('');
console.log(driveSplit.join(' '));
const naviSplit = hacker2.split('');
const naviHack2 = naviSplit.reverse('');
console.log(naviHack2.join(''));

if  (hacker1<hacker2) {                                         // Compara as strings lexicalmente. Se hacker1 é menor então executa.
    console.log(`The driver's name goes first.`);               // Retorna a variavel hacker1.
} else if (hacker1>hacker2) {                                   // Compara as strings lexicalmente. Se hacker1 é maior então executa.
    console.log(`Yo, the navigator goes first definitely.`)
} else {                                                        // Sem pestanejar, aceita qualquer coisa e retorna abaixo.
    console.log(`What?! You both have the same name?`)
}

// Há possibilidade de usar comando locale.compare
















