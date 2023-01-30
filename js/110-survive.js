//https://www.codewars.com/kata/59ca8246d751df55cc00014c

function hero(bullets, dragons){

    if (bullets >= dragons *2) {
    return true;
    } else {
        if (bullets < dragons * 2) {
          return false;  
        }
    }
}
   console.log(hero(10, 5), '-->', true);
   console.log(hero(7, 4), '-->', false);
    console.log(hero(4, 5), '-->', false);


    //else from codewars:

    function hero(bullets, dragons){
        return (bullets / 2 >= dragons) ? true : false;
        }

