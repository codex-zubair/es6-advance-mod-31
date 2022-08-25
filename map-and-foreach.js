// Foreach system of an array...
const arr = [122,23,34,35,4564,6,6];

const x = (arr.forEach(element => {
    console.log(element);;    
    }));

/* 
    work like map but don’t give any return value for store…that’s why people 
    doesn’t use it. much… it doesn’t make an array just give the output value…. 
    each out put */
    console.log(x);






// Mapping System...

// Looping on everyone and taking everyone value for the condition... (true false result both are taking but filter only take the true value...)
const y = (arr.map(element => element % 2 === 0));

const z = (arr.map(element => element * 2));

console.log(y,z);

