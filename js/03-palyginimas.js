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


// 2. Išvesti teksto tipo kintamųjų ilgius
console.log('---2---');


let tekstas = 'road';
console.log(tekstas.length);

/* Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
a. kuris didesnis
b. kuris mažesnis
c. ar jie lygūs
d. ar jie nelygūs
e. kuris didesnis arba lygus
f. kuris mažesnis arba lygus
*/
console.log('---3---');

const a = 'vasara';
const b = 'pavasaris';

if (a.length > b.length) {
    console.log('Pomidoras');
} else if (a.length < b.length) {
    console.log('Bandykite kitą kartą.');
}

if (a.length === b.length) {
    console.log('Pomidoras');
} 
if (a.length !== b.length) {
    console.log('Bandykite kitą kartą.');
}

if (a.length >= b.length) {
    console.log('Pomidoras');
} 
if (a.length <= b.length) {
    console.log('Bandykite kitą kartą.');
}


// 4. Išvesti sąrašo tipo kintamųjų ilgius.
console.log('---4---');

let list = ['a', 'b', 'c'];

console.log(list.length);

/* 5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
a. kuris didesnis
b. kuris mažesnis
c. ar jie lygūs
d. ar jie nelygūs
e. kuris didesnis arba lygus
f. kuris mažesnis arba lygus
*/
console.log('---5---');

const list1 = [7, 8, 9, 7];
const list2 = ['hello', 'hi', 'labas', 'hola'];

if (list1.length > list2.length) {
    console.log('true didesnis','-->', 'Pomidoras');
} else {
    console.log('false didesnis','-->', 'Bandykite kitą kartą.');
}
if (list1.length < list2.length) {
    console.log('true mažesnis','-->', 'Pomidoras');
} else {
    console.log('false mažesnis','-->', 'Bandykite kitą kartą.');
}
if (list1.length === list2.length) {
    console.log('true lygūs','-->','Pomidoras');
} else {
    console.log('false lygūs','-->', 'Bandykite kitą kartą.');
}

if (list1.length >= list2.length) {
    console.log('true didesnis arba lygus','-->', 'Pomidoras');
} else {
    console.log('false didesnis arba lygus','-->','Bandykite kitą kartą.');
}
if (list1.length <= list2.length) {
    console.log('true mažesnis arba lygus','-->','Pomidoras');
} else {
    console.log('false mažesnis arba lygus','-->', 'Bandykite kitą kartą.');
}




