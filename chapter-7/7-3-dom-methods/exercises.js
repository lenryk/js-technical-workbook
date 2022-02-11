// 1. What are 3 DOM methods used to retrive DOM nodes / HTML elements

// getElementByID
// querySelector
// getElementsByClassNames

// 2. What is the difference between querySelector() and querySelectorAll()

// querySelector only gets the first element on the page
// querySelectoAll gets all of them in a node

// 3. For the following HTML, retrive the number of <p> elements

<ul>
    <p>foo</p>
    <p>bar</p>
    <p>zing</p>
    <p>nee</p>
</ul>

querySelectorAll("p").length;

// This will return 4

// 4. For exercise 3 retrive the innerHTML of the fourth <p>

let p4 = document.querySelectorAll("p")

console.log(p4[3].innerHTML)

// 5. Carrying on from question 4 remove the third <p>

let p4 = document.querySelectorAll("p")

let ul = document.querySelectorAll("ul")

ul.removeChild(p4[2])

// 6. Create a <div> and <p>. Assign the following text to the <p> and append it to the <div>
// Make sure both elements are present on a webpage

let div = document.createElement("div")

let p = document.createElement("p")

p.textContent = "this is demo text that will show inside a p element";

div.appendChild(p)

document.body.appendChild(div)

// 7. From question 6, replace the <p> node with a <li> node. Set the text content of the <li> to "Magnus Operandi"

let li = document.createElement("li")

li.textContent = "Magnus Operandi"

div.replaceChild(li, div.children[0])

document.body.appendChild(div)

// 8. For the following HTML insert the number 100 before 200

<>
    <ul id="myUl">
        <li>200</li>
        <li>300</li>
        <li>400</li>
    </ul>
</>

let ul = document.getElementById("myUl")

let li = document.createElement("li")

li.textContent = "100"

ul.insertBefore(li, ul.firstElementChild)

// 9. innerHTML is preferred over the textContent property?

// False
// textContent is preferred probably because of parsing

// 10. console.log the value of the third input element "Pinky" using the querySelectAll() method

<>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" value="">
    <button id="myButton">Submit</button>

    <label for="username1">Username:</label>
    <input type="text" id="username1" name="username1" value="gigi">

    <button id = "myButton">Submit</button>

    <label for="username2">Username:</label>

    <input type="text" id="username2" name="username2" value="Pinky">

    <button id="myButton">Submit</button>
</>

let input = document.querySelectAll("input")
console.log(input[2].value)

// 11. Create a button and insert it into your document.
// Set the text content of the button to "click"

let button = document.createElement("button")

button.textContent = "click"

document.body.appendChild(button)

// 12. Carry on from question 11l Set the id attribute of the button to "myButton"
// and set its onclick attribute to clickFunc().
// log the button to the console, what do you get back?

let button = document.creatElement("button")

button.textContent = "click"

button.setAttribute("id", "myButton")

button.setAttribute("onclick", "myFunc()")

document.body.appendChild(button)

console.log(button)

// 13. Attach an addEventListener() method to the button os that when the button is clicked
// the user is alerted with the greeting. "Hi there junior dev"

let button = document.createElement("button")

button.textContent = "click"

button.setAttribute("id", "myButton")

button.setAttribute("onClick", "myFunc()")

button.addEventListener("click", function(){
    alert("Hi there junior dev")
})

// 14. Get the onclick attribute of the button that you just created with the getAttribute() method

button.getAttribute("onclick")

// 15. What is the difference between the document and window object?

// The global window object is loaded into your browser and has methods such as window.onload()
// The document is a document containg your code which will be loaded inside the window

// 16. What is the difference between remove() and removeChild()

// Remove() will remove the entire parent element
// removeChild() will remove the first child node only