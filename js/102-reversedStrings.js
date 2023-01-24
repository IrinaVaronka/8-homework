function solution(str) {
    let rev = '';

    for (let i = 0; i < str.length; i++) {
        rev = str[i] + rev;
        
    }

    return rev;
}

//console.log(solution('world'),'-->', 'dlrow');
//console.log(solution('word'),'-->', 'drow');