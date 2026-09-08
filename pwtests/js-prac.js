//Module-1

//1
class SmartTV {
    brand = "Sony";
    screenSize = "55 inches";
    price = 65000;
}

let tv = new SmartTV();

console.log("Brand : " + tv.brand);
console.log("Screen Size : " + tv.screenSize);
console.log("Price : " + tv.price);

//2
class AirlineTicket {
    passengerName = "Rahul";
    flightNumber = "AI302";
    destination = "Singapore";
}

let ticket = new AirlineTicket();

console.log("Passenger : " + ticket.passengerName);
console.log("Flight : " + ticket.flightNumber);
console.log("Destination : " + ticket.destination);

//3
class Rocket {
    rocketName = "Falcon Heavy";
    fuelType = "Liquid Oxygen";
    launchYear = 2018;
}

let rocket = new Rocket();

console.log("Rocket : " + rocket.rocketName);
console.log("Fuel : " + rocket.fuelType);
console.log("Launch Year : " + rocket.launchYear);

//Module-2

//1
class WaterBottle 
{
    brand = "Milton";
    waterLevel = 25;

    checkWater() 
    {
        if (this.waterLevel < 30) 
            {
                this.result = "Refill Needed";
            }
            else 
                {
                    this.result = "Water Level Good";
                }
            }
}

let bottle = new WaterBottle();
bottle.checkWater();
console.log(bottle.brand + " : " + bottle.result);

//2
class ElectricCar {

    brand = "Tesla";
    battery = 78;

    checkBattery() {

        if (this.battery >= 20) {
            this.result = "Ready to Drive";

        } else {
            this.result = "Charge Required";
        }

    }

}

let car = new ElectricCar();
car.checkBattery();
console.log(car.brand + " : " + car.result);

//3

class Drone {

    model = "DJI Mini";
    altitude = 150;

    checkAltitude() {
        if (this.altitude > 120) {
            this.status = "Flying High";
        } else {
            this.status = "Flying Low";
        }
    }
}

let drone = new Drone();
drone.checkAltitude();
console.log(drone.model + " : " + drone.status);

//Module-3

//1
class Fan {

    constructor(name, age, ticketType) {

        this.name = name;
        this.age = age;
        this.ticketType = ticketType;

    }

    checkEntry() {

        if (this.ticketType == "VIP") {

            console.log(this.name + " → Welcome to the Front Row!");

        }

        else {

            console.log(this.name + " → Enjoy the Concert!");

        }

    }

}

let f1 = new Fan("Jisoo",21,"VIP");
let f2 = new Fan("Rahul",20,"Regular");
let f3 = new Fan("Aisha",18,"VIP");

console.log("🎟️ Entry Status\n");

f1.checkEntry();
f2.checkEntry();
f3.checkEntry();

//2

class Viewer {

    constructor(name,hours){

        this.name=name;
        this.hours=hours;

    }

    checkBinge(){

        console.log(this.name+" watched "+this.hours+" hours");

        if(this.hours>8){

            console.log("⭐ Binge Master\n");

        }

        else{

            console.log("🙂 Casual Viewer\n");

        }

    }

}

let v1=new Viewer("Emma",10);
let v2=new Viewer("Ryan",3);

console.log("📺 Netflix Report\n");

v1.checkBinge();
v2.checkBinge();

//module=4

//1

class Viewer {

    constructor(name, age, subscription) {

        this.name = name;
        this.age = age;
        this.subscription = subscription;

    }

    recommendShow() {

        console.log("👤 " + this.name);

        if (this.age >= 18 && this.subscription == "Premium") {

            console.log("🎬 Recommendation : Stranger Things");

        }

        else if (this.age >= 18 && this.subscription == "Basic") {

            console.log("🎬 Recommendation : Wednesday");

        }

        else {

            console.log("🎬 Recommendation : Kung Fu Panda");

        }

        console.log();

    }

}

let v1 = new Viewer("Emma",22,"Premium");
let v2 = new Viewer("Rahul",20,"Basic");
let v3 = new Viewer("Aarav",12,"Premium");

console.log("========== NETFLIX ==========");

v1.recommendShow();
v2.recommendShow();
v3.recommendShow();

console.log("=============================");

//2
class Fan{

constructor(name,membership,years){

this.name=name;
this.membership=membership;
this.years=years;

}

checkReward(){

if(this.membership=="Gold" && this.years>=5){

console.log(this.name+" ⭐ Backstage Pass");

}

else if(this.membership=="Gold"){

console.log(this.name+" ⭐ VIP Seat");

}

else{

console.log(this.name+" 🎫 Regular Seat");

}

}

}

let f1=new Fan("Sophia","Gold",6);
let f2=new Fan("Maya","Gold",2);
let f3=new Fan("Ryan","Silver",4);

console.log("🎤 BTS FAN REWARDS\n");

f1.checkReward();
f2.checkReward();
f3.checkReward();

//3
class Traveler{

constructor(name,budget,passport){

this.name=name;
this.budget=budget;
this.passport=passport;

}

planTrip(){

if(this.budget>=5000 && this.passport=="Yes"){

console.log(this.name+" 🌎 International Trip");

}

else if(this.budget>=2000 && this.passport=="Yes"){

console.log(this.name+" ✈️ Asian Tour");

}

else{

console.log(this.name+" 🏖️ Local Vacation");

}

}

}

let t1=new Traveler("Emma",7000,"Yes");
let t2=new Traveler("Rahul",2500,"Yes");
let t3=new Traveler("Aisha",1500,"No");

console.log("🌍 Vacation Planner\n");

t1.planTrip();
t2.planTrip();
t3.planTrip();