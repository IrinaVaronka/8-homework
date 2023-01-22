console.clear()

/* Lyginant, jei rezultatas tenkina palyginimo sąlygą, 
tai į console išvesti žodį “Pomidoras”, o jei sąlyga 
nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.
*/

/* 1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
a. kuris didesnis
b. kuris mažesnis
c. ar jie lygūs
d. ar jie nelygūs
e. kuris didesnis arba lygus
f. kuris mažesnis arba lygus
*/

console.log('---1---');
console.log();

if (36 > 34) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (378 < 200) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}


const m = 65;
const n = 65;
if (m === n) {
    console.log('Pomidoras');
} else  if (m !== n) {
    console.log('Bandykite kitą kartą.');
}


if (77 >= 7) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (5 <= 11) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
