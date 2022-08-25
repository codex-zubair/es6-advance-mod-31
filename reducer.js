const arr = [1,2,3,4];
const arr2 = [11,22,33,44,55];


// previous value number = 3 Must have to initialized... previous = 5
const arrReduce = arr.reduce((previous,current)=>
{
    return previous = previous + current;
},5)


console.log(arrReduce);
