const { apple, banana, ...c } = {
    apple: "more apple",
    banana: "more banana",

    book1: "its book1",
    book2: "its book2",
    book3: "its book3",

}

// ...c rest of things taking as an array inside of it... 
console.log(apple, banana, c);



const boo = {
    book1: "its book1",
    book2: "its book2",
    book3: "its book3",

    book:{
        bo :"i'm another book",
    }

}

console.log(boo['book']['bo']);