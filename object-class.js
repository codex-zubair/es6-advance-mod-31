// creating a class...
class MatchMember {

    // declaring the variables for this class...
    name;
    age;
    location;
    nationality = 'Bangladeshi';
    livingRightNow = 'Baitul Mamun Jame Mosque...'
    job;


    // now creating a constructor for taking user values...
    constructor(name, age, location, job) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.job = job;
    }
    // Now Constructor are ready...


    // Now Creating function for work...
    introDuction(name, age, location, job) {
        console.log(`my name is ${name} 
        i'm ${age}
        i'm a ${job}
        i'm living in ${location}`);

    }





}

// object instances...
const younus = new MatchMember();


younus.introDuction('younus', 25, "dhaka", "teacher");