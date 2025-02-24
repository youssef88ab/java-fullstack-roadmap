/* 
    DOM [Check Attributes]
    - hasAttribute(name)
    - getAttribute(name)
    - setAttribute(name, value)
    - removeAttribute(name)
    - hasAttributes()
*/

console.log(document.getElementsByTagName("p")[0].attributes); 

let myP = document.getElementsByTagName("p")[0];

function CheckAttribute() {
if (myP.hasAttribute("data-src")) {
    if(myP.getAttribute("data-src") === '')
    {
        myP.setAttribute("data-src", "https://www.google.com");
        document.getElementById("result").innerHTML = myP.getAttribute("data-src");
    }
}

else {
    document.getElementById("result").innerHTML = "Attribute not found";
}
}

/* 
    DOM [Create Elements]
    - createElement(element)
    - createTextNode(text)
    - appendChild(element)
    - createComment(text)
    - createAttribute(name)
    - appendChild(attribute)
*/ 

let myElement = document.createElement("div");
let myAttribute = document.createAttribute("data-src");
let myText = document.createTextNode("Hello World");
let myComment = document.createComment("This is a comment");

myElement.className = "create-elements";
myElement.setAttributeNode(myAttribute);
myElement.setAttribute("data-test", "test");


function CreateElements() {
// Append Comment to Element
myElement.appendChild(myComment);

// Append Text Node to Element
myElement.appendChild(myText);


// Append Element to Body
document.body.appendChild(myElement);
}

/* Practice With Products Example */

for (let i = 0 ; i < 3 ; i++) {

let Products = document.createElement("div");
Products.className = "products" ;

let Product = document.createElement("div");
Product.className = "product" ; 


let productName = document.createElement("h3") ;
productName.className = "product-Name" ; 

let pTitle = document.createTextNode("Nike Air Force 07");
productName.appendChild(pTitle);

Product.appendChild(productName);

let Description = document.createElement("p"); 
Description.className = "product-description" ;

let pDescription = document.createTextNode("Very Aweeeso Sneakers For You Hanghout");
Description.appendChild(pDescription);

Product.appendChild(Description);


Products.appendChild(Product);

document.body.appendChild(Products);
}

/* eND oF pRACTICE */ 

/* 
    DOM [Deal With Chlildrens]
    -- children
    -- childNodes 
    -- firstChild
    -- lastChild
    -- firstElementChild 
    -- lastElementChild
  
*/

let parent = document.createElement("div");
parent.className = "parent";
let child1 = document.createElement("p"); 
let text = document.createTextNode("Child 1");
let span = document.createElement("span");
span.appendChild(text);
child1.appendChild(text); 
parent.appendChild(child1);
parent.appendChild(span);


document.body.appendChild(parent);

let myParent = document.querySelector(".parent");
console.log(myParent.children);
console.log(myParent.children[0]);
console.log(myParent.childNodes);

let checkattributes = document.querySelector(".check-attributes");
console.log(checkattributes.childNodes);

console.log(checkattributes.firstChild);
console.log(checkattributes.lastChild);
console.log(checkattributes.firstElementChild);
console.log(checkattributes.lastElementChild);