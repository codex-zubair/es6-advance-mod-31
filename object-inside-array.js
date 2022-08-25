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

