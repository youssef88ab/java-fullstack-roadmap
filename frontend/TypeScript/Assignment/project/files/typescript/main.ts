function calculate(numOne: number, numTwo: number) {
    return numOne + numTwo;
  }
  
  console.log(calculate(10, 20)); // 30
  // console.log(calculate("10", "20")); // We Don't Need This To Work
  console.log(calculate(+true, +true)); // 2

function printInfo(valueOne:(number | string), valueTwo:(number | string)) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
  }
  
console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

let arr: (number | boolean[] | string | (string | (string | number)[])[])[] = [10,["Youssef","Hamza"],"String",[true]];

function reportErrors(username, age: number) {
    let rank = "Professor";
    return `Username: ${username}`;
    console.log("We Will Not Reach Here");
  }
  
console.log(reportErrors("Elzero", 40));

  let nothing;
  let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c) {
    return `${a}${b}${c}`;
  }
  
  // Replace ???? With The Available Variables As Argument To Get The Result
  console.log(showMyDetails(nothing , nothing , theName)); // Elzero

  function showMsg(user?: string, age?: (number | string) , country?: string) {
    return `${user}${age}${country}`;
  }
  
  console.log(showMsg());
  console.log(showMsg("Elzero"));
  console.log(showMsg("Elzero", 40));
  console.log(showMsg("Elzero", "40", "Egypt"));

// Write The Function Here
function printInConsole(...Values : any[]) {
    Values.forEach((value) => console.log(`The Value Is ${value} And Type Is ${typeof value}`));
    console.log("Done");
}

// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));

// Write Your Code Here
type n = string | number ;

// Do Not Edit Here
let myData: n;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here

// Write Your Code Here
type mix = number | boolean ;

// Do Not Edit Here
let myInfo: mix;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here

// Write Your Code Here

type Info = {
  theName : string , 
  theAge : number 
}

// Do Not Edit Here
function showInfo(data: Info) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));

type Full = Info & {
  country : string 
}

function showFullInfo(data: Full) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
  console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));

function yesOrNo(val: number) : "Yes" | "No" {
  if (val > 10) {
    return "Yes";
  }
  else {
    return "No";
  }
}

// Do Not Edit Here
// console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False

type custom = "Yes" | "No";

function isHeOld(age: number ) : custom | number {
  if (age > 40) {
    return "Yes";
  }
  else {
    return "No";
  }
}

// Do Not Edit Here
// console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"

let post: readonly [number, string, boolean];

// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
post = [100, "Title", true]; // Good

// post.push("Elzero"); // Error => Cant Add

// Create Destructuring Here

const [id , title , state] = post ;

// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true

// Create Enums + Function Here
function calcHard(value: number): number {
  return Game.Hard - value ;
}

enum Game {
  Easy = 100 , 
  Medium = Easy - 20 , 
  Hard = Medium - (Easy / 2) , 
  Insane = calcHard(10)
}

// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20


const userInfo: {
  username: string,
  age: string | number,
  website?: string,
  skills: {
    backEnd : number[] 
  }
} = {
  username: "Elzero",
  age: 40,
  website: "Elzero.org",
  skills: {
    backEnd : [10 , 20 ]
  }
}

// We Need To Remove Error From This Edits
userInfo.username = "Osama";
userInfo.age = "40";
userInfo.skills.backEnd.push(100);

// Edit The Interface To Fix The Problems
interface Member {
  id: number | string;
  username: string;
  state: boolean;

  getName(): string;

}

// Do Not Edit The Code Below
let user: Member = { // Property 'country' is missing in type
  id: 100,
  username: "Elzero",
  state: true,
  getName() { // 'getName' does not exist in type 'Member'
    return this.username;
  }
}

user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false; // Cannot assign to 'state' because it is a read-only property

// Create Interface Here
interface Client {
  id: number , 
  username: string , 
  active: boolean , 
  discount: number , 
  getPrice(price :number)
}

// Do Not Edit The Code Below
let client: Client = {
  id: 100,
  username: "Elzero",
  active: true,
  discount: 10,
  getPrice(price: number) {
    return price - this.discount;
  }
}

console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);

// Do Not Edit The Code Below
interface Man {
  title: string;
  weight: number;
  age: number;
}

interface Bird {
  canFly: boolean;
}

interface Superman extends Man , Bird {
  bodyType : string , 
  origin: string
}

let creature: Superman = {
  title: "Superman",
  weight: 100,
  age: 500,
  canFly: true,
  bodyType: "Iron",
  origin: "Krypton"
}

// Create Class Here
class Player {
  username: string ;
  type: string ;
  value: number | string ; 
  states?: boolean | number ;
  constructor(username:string , type:string , value:number |string , states?: boolean | number) {
    this.username = username ; 
    this.type = type ; 
    this.value = value ; 
    this.states = states;
  }
  public details() {
    
  }
}

// Do Not Edit The Code Below
let playerA = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);

console.log(playerA.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77

class Shorten {
  public id: number;
  public username: string;
  protected title: string;
  constructor (id: number, username: string, title: string) {
    this.id = id;
    this.username = username;
    this.title = title;
  }
}

let tester = new Shorten(100, "Elzero", "Developer");

console.log(tester.id);
console.log(tester.username);

class Show {
  constructor (private _title: string) {}
  public get title() : string {
    return this._title;
  }

  
  public set title(title : string) {
    this.title = title;
  }
  
}

let testeer = new Show("Elzero");

console.log(testeer.title); // Property 'title' does not exist on type 'Show'
testeer.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(testeer.title); // Property 'title' does not exist on type 'Show'

interface Play {
  id: number;
  title: string;
  level: number | string;
  logIn(): void;
  logOut(msg: string): void;
}

// Create Your Class Here
class Playeer implements Play {
  public constructor(public id:number , public title:string , public level:number|string) {
  }
  logIn(): void {
      
  } 
  logOut(msg: string): void {
      
  }
}

let player1 = new Playeer(100, "Elzero", 95);

console.log(player1.id); // 100
console.log(player1.title); // "Elzero"
console.log(player1.level); // 95
player1.logIn(); // Logged In
player1.logOut("Good Bye"); // Logged Out, Good Bye

// Do Not Edit
type numandstring = number | string;

abstract class BaseGame {
  constructor(public title: string, public price: numandstring) {}
  abstract getLocation() : string;
  abstract getDiscount() : string;
}

// Start Edit And Fix
class RPG extends BaseGame {
  constructor(title: string, public price: numandstring, public rate: number) {
    super(title , price);
  }
  getLocation() : string {
      return "Location";
  }

  getDiscount() : string {
      return "Discount";
  }

}

class Action extends BaseGame {
  constructor(title: string, public price: numandstring, public rate: number , public company: string) {
    super(title , price);
  }
  getLocation() : string {
    return "Location";
  }

  getDiscount() : string {
      return "Discount";
  }

}
// End Edit And Fix

// Do Not Edit
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"

console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"

// Write Function Code Here
function showTypes<T = string, S = string, V = string>(T?: T, S?: S, V?: V) {
  return `${T ?? 'Nothing'} - ${S ?? 'Nothing'} - ${V ?? 'Nothing'}`;
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true

// Write Class Code Here
class Gaame<T> {
  constructor(public title: T, public price: number) {}

  getDiscount(discount: number) {
    return `The Discount Is ${discount}`;
  }
}

// Do Not Edit Here
let gameeOne = new Gaame<string>("Ys", 100);
let gameeTwo = new Gaame<number>(2064, 100); // There's A Game Called "2064"

console.log(gameeOne.title); // "Ys"
console.log(gameeOne.price); // 100
console.log(gameeOne.getDiscount(50)); // "The Discount Is 50"

console.log(gameeTwo.title); // 2064
console.log(gameeTwo.price); // 100
console.log(gameeTwo.getDiscount(80)); // "The Discount Is 80"