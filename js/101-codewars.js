console.clear()

/* []              -->  "no one likes this"
["Peter"]          -->  "Peter likes this"
["Jacob", "Alex"]  -->  "Jacob and Alex like this"
["Max", "John", "Mark"]   -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"] -->  "Alex, Jacob and 2 
others like this"
*/

const boys = ['no one', 'Peter', 'Jacob', 'Alex', 'Max', 'John', 'Mark'];
//let i = 0;
//let fraze = 'likes this';
//let fraze1 = 'like this';
//let start = boys[i];
//let start1 = 'no one';


    for (let i = 0; i < boys.length; i++) {
        const name = boys[i];
        const fraze = `"${name} likes this"`;
        console.log(fraze);
    }
//console.log(start1 + ' ' + fraze), '-->', "no one likes this";
//console.log(boys[0] + ' ' + fraze), '-->', '"Peter likes this"';
//console.log(boys[1] + ' ' + 'and' + ' ' + boys[2] + ' ' + fraze), '-->', '"Jacob and Alex like this"';
//console.log(likes('Max', 'John', 'Mark'), '-->', '"Max, John and Mark like this"');
//console.log(likes('Alex', 'Jacob', 'Mark', 'Max'), '-->', '"Alex, Jacob and 2 others like this"');
