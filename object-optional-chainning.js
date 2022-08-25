const object1 = {

    me: 'first object',

    object2: {
        me: 'second object',

        object3:
        {
            me: "third object.",


            object4:
            {
                me: "fourth object."
            }
        }


    }


}


// console.log(object1);
// console.log(object1.object2);
console.log(object1.object2.object?.object4.me);