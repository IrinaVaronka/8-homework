console.clear()
/* 
Veiksmai su kintamaisiais

4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo 
galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/

/* 1. Susumuoti visus skaičiaus tipo kintamuosius
    a.Rezultatą išvesti į console 
    */
console.log('---1---');
console.log();

const number = 679;
console.log(number);

const metai = 25;
console.log(metai);

const savaite = 6;
console.log(savaite);

const sum = number + metai + savaite;
console.log('Suma -->',sum);
console.log();

/* 2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų 
būtų sudarytas tarpas
    a. Rezultatą išvesti į console
    */
console.log('---2---');

console.log();

const firstName = 'Iryna';
console.log(firstName);

const secondName = 'Varonka';
console.log(secondName);

const miestas = 'Druskininkai';
console.log(miestas);

//Pirmas variantas:
/*const fraze = firstName + (' ') + secondName + (' ') + miestas;
console.log(fraze);
*/

const fraze = `${firstName} ${secondName} ${miestas}`;
console.log('Fraze -->', fraze);

console.log();

/* 3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, 
pagal pateiktą logiką
    a. 1-2+3-4+5
    b. Rezultatą išvesti į console
    */
console.log('---3---');
console.log();

const list = [4, 5, 1, 2, 8];

const listSuma = list[0] - list[1] + list[2] - list[3] + list[4];
console.log('Rezultatas: ', listSuma);

console.log();

console.log('---4---');

console.log();

// Sujungti sąrašų vertes, kurių tipas yra tekstai, 
// nuo sąrašo galo iki pradžios taip, jog tarp jų būtų 
// kablelis ir tarpas

let sarasas = ['flower', 'grass', 'tree', 'road', 'car'];

let reverse = `${sarasas[4]}, ${sarasas[3]}, ${sarasas[2]}, ${sarasas[1]}, ${sarasas[0]}.`;

console.log(reverse);

console.log();



