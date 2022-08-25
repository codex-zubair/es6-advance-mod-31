// Another class from here we will call prototype Constructor...
class MatchHouse {
    id;
    workShift;
    mustCleanDay = 'Friday';

    constructor(id, workShift) {
        this.id = id;
        this.workShift = workShift;
    }

}





// creating a class...
class MatchMember extends MatchHouse {

    // declaring the variables for this class...
    name;
    age;
    location;
    nationality = 'Bangladeshi';
    livingRightNow = 'Baitul Mamun Jame Mosque...'
    job;


    // now creating a constructor for taking user values...
    constructor(name, age, location, job, id, workShift, mustCleanDay) {


        // !Super must stay on top...
        super(id, workShift, mustCleanDay);
        this.name = name;
        this.age = age;
        this.location = location;
        this.job = job;



        // ! here using super constructor from another class 
        // ! it called prototype (get features from one another class.)
        /*!    Prototypes are the mechanism by which JavaScript objects 
           inherit or get features from one another. */





    }
    // Now Constructor are ready...


    //! Now Creating function for work...
    introDuction(name, age, location, job) {
        console.log(`my name is ${name} 
        i'm ${age}
        i'm a ${job}
        i'm living in ${location}`);

    }


    // inherited feature (prototype from another place)
    myCleanDay(id, workShift) {
        console.log(`my id is ${id}
i'll clean ${this.mustCleanDay}
at ${workShift}`);
    }


}

// object instances...
const younus = new MatchMember();



// normally calling object in class..
younus.introDuction('younus', 25, "dhaka", "teacher");



//!inheritance object calling...
younus.myCleanDay(1243, 'Evening')