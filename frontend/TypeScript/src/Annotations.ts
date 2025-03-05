let hire: boolean = true; // Boolean Value (True , False);
let thename: string = "Youssef"; // String Value 
let age: number = 20; // Number Value
let all: any = 10; // Any Data Type 
all = "EST";
let joker: number | string ;
joker = 10;
joker = "Joker";

function add(n1: number , n2: number) {
    return n1 + n2 ;
}

console.log(add(1,10));

let myFriends: string[] = ["Ousama" , "Youssef" , "Amine" , "Hamza"];

for(let friend in myFriends) {
    console.log(friend.repeat(2));
}

// Type Annotation With Multidimensional Array ;

let arrayOne: number[] = [1,2,3,4,5];
let arrayTwo: string[] = ["mo" , "hi" , "ha"];
let arrayThree : (string | number)[] = [1 , 2 , 3 , "YO" , "HA" , "XO"];

let arrayFour :(number | string | boolean | string[] | boolean[])[] = [1,2,3,"YO",["A","B","C"],[true,false],true];


/* Type Annotaions With Fucntions 

    -- noImplicitAny 

    -- noImplicitReturn

    -- noUnusedLocals
*/ 

let showMsg = true ; 

function showDetaills(nom:string , prenom: string , salary: number , olala?: boolean) : string {
    let test = 10;
    if(showMsg)
    {
    return `Hello ${nom}, ${prenom} , Your Salary ${salary} Test Variable ${test} Status${olala}`;
    }
    return `No Data Found`;
}
    
console.log(showDetaills("Youssef","Ab",0));

/* 
    Functions 
        --Rest Parameter 
*/

function addAll(...nums : number[]) {
    let result: number = 0 ; 
    nums.forEach((num) => result += num);
    return result;
}

/* 
    Function 
        -- Arrow Function 
        -- Anonymous Function 
*/

const addWithArrow = (num1 : number , num2 : number) : number => num1 + num2 ;
console.log(addWithArrow(1,2));


/* 
    Data Types 
    Type Alias 
*/

type st = string ; 
let myname: st = "Youssef" ;

type mix = (string | number); 
let mixvar: mix = 10; 
mixvar = "Youss"; 

/* Advanced Alias */ 

type buttons = {
    up : string ; 
    down : string ; 
    left : string ; 
    right : string ; 
}

type alpha = buttons & {
    x : boolean ;
} ;

function directions(dir: alpha) {
    return `
    Up ${dir.up} 
    Down ${dir.down}
    Left ${dir.left}
    Right ${dir.right}
    X ${dir.x}`;
}

console.log(directions({up:"UP" , down:"DOWN", left:"LEFT", right:"RIGHT",x:true}));

/*
    Data Types [Tuple]
    --- is another sort of array type 
    --- we knows exactly how many element it contains 
    --- we knows which types it contains in specific positions
*/

let article: [number , string , boolean] = [11 , "News" , true];

// Destructering 

const [id , title , published] = article ;
console.log(id);
console.log(title);
console.log(published);

/* 
    Data Types  

    - Void
    -- Function that will return nothing 
    -- Function in javascript That not return a value will show undefined ;
    -- undefined is not void 


    - Never 
    -- return type never return 
    -- the function dosent have a normal completion 
    -- it throws an error or never finishes running at all "infinite loop"
*/ 

function logging(msg :string) :void {
    console.log(msg);
    return;
}

function alwayslog(name : string ) {
    while (true) {
        console.log(name);
    }
    return 10 ;
}

/*
  Data Types
  - Enums => Enumerations
  --- Allow Us To Declare A Set Of Named Constants
  --- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
  --- It Organize Your Code
  --- By Default Enums Are Number-Based, First Element Is 0
  --- Theres A Numeric Enums
  --- Theres A String-Based Enums
  --- Theres Heterogeneous Enums [String + Number]
*/

enum Level {
    kids = 15 , 
    easy = 10 , 
    medium = 6 , 
    hard = 3 
}

let lvl:string = "Easy";

if (lvl === "Easy") {
    console.log(`The Time in Easy Lvl Is ${Level.easy}`);
}

// Type Assertion 

let myImg = document.getElementById("my-img") as HTMLImageElement; 

let trt = "Yssf" ; 
console.log((trt as string).repeat(3));

/*
  Data Types
  - Union And Intersection Types
  --- Union Type
  ------ The | Symbol Is Used To Create The Union => "Or"

  --- Intersection Type
  ------ Is A Type That Combines Several Types Into One
  ------ The & Symbol Is Used To Create An Intersection => "And"

  --- If A Union Is An OR, Then An Intersection Is An AND.
*/

// let all: number | string = 100;

type a = {
    one : string ; 
    two : number ;
    three : boolean ; 
} 

type b = {
    four : string ; 
    five : number ; 
}

type c = a & {
    six : number; 
}

type d = a & b & c ; 

function union(values: d) {
    console.log(values.one);
    console.log(values.two);
    console.log(values.three);
    console.log(values.four);
    console.log(values.five);
    console.log(values.six);
}

union({one : "YO" , two : 1 , three :  true , four : "FO" , five :  10 , six : 12});

/* 
    Type Annotation Object 
*/

let myObject : {
    username: string , 
    age: number , 
    hire: boolean 
} = {
    username : "Youssef" , 
    age : 20 , 
    hire : false 
}

myObject.username = "OK"; 
myObject.age = 10 ; 
myObject.hire = false ; 