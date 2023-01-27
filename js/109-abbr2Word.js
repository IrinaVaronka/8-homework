
//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
console.clear()

function abbrevName(name){

let index = name.indexOf(' '); 
let id = name.substring(0, index); 
let text = name.substring(index + 1);  

let P = id;
for (let i = 0; i < 1; i++) {
    console.log(P[i]);
}

let S = text;
for (let k = 0; k < 1; k++) {
   console.log(S[k]); 
}
let shortname = id.slice(0,1).toUpperCase() + '.' + text[0].toUpperCase();

return shortname;

//else from codewars:
}
console.log(abbrevName('Sam Harris'), '-->', 'S.H');
console.log(abbrevName('P Favuzzi'), '-->', 'P.F')



function abbrevName(name){

return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}
//else from codewars:
function abbrevName(name){

    const [firstName, lastName] = name.split(' ')
    const firstInitial = firstName.charAt(0).toUpperCase()
    const secondInitial = lastName.charAt(0).toUpperCase()
    return firstInitial + '.' + secondInitial

}