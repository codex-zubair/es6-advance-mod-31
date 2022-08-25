// Object array … object[0,12].value…

/* object[{name:rock , roll:1}{name:rock , roll:1}]
object[0].name
 */


// simple object...
const cow = {

    red: "cow color is red",
    black: "cow color is black",

    cowBody: {
        tail: 1,
        eyes: 2,
        nose: 1,
    },

    cowMilk:
    {
        dailyMilk: '5LT',
        weight: "20kg",
    }




}



console.log(cow);
console.log(cow.black);
console.log(cow.red);
console.log(cow.cowMilk.weight);

// Object also work line an array...


const cow2 = [


    {
        tail: 1,
        eyes: 2,
        nose: 1,
    },


    {
        dailyMilk: '5LT',
        weight: "20kg",
    }




];

// accessing array of object.
console.log(cow2[0]);
console.log(cow2[0].eyes);
console.log(cow2[1]);
console.log(cow2[1].dailyMilk);