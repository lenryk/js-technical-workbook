// 1. What root DOM node provides access to all the other DOM nodes?

// The document node

// 2. Access the text content in between the opening and closing <p> tags

<p id="myP">The DOM is super handy for making webpages interactive</p>

console.log(document.getElementById("myP").innerHTML);

// Using getEelementById we can access the HTML node
// We then simply use .innerHTML which is available on most DOM objects

// 3. Change the text content in between the <h1> tags to Enterprise Solutions

<h1>WebTech Solutions</h1>

document.querySelector("h1").innerHTML = "Enterprise Solutions";

// In this case the HTML object does not have an id so we have to use querySelector which accepts CSS selectors

// 4. Map the following input attributes to DOM properties

<input type="number" id="productVal" value="100" status="available"></input>

console.log(document.getElementById("productVal").type);
console.log(document.getElementById("productVal").value);
console.log(document.getElementById("productVal").status);
console.log(document.getElementById("productVal").id);

// 5. Return the length of the children of the following <ul> element

<ul>
    <li>ID: 2183</li>
    <li>ID: 1030</li>
    <li>ID: 105</li>
    <li>ID: 8294</li>
</ul>

document.querySelector("ul").getElementsByTagName("li").length

// Using querySelector we can grab the parent node and access the children <li>s from inside

// 6. Change the color of the text within the first <p> tag to #b19cd9

<p>This is a test paragraph for demo purposes only</p>

<p>This is the second paragraph which should stay the same color</p>

<p>Yet another paragraph that should stay the same color</p>

document.querySelector("p").style.color = "#b19cd9"

// The queryselector only finds the first element
// Using this we can access it and change the color using style.color prop

// 7. Change the color, background color and width properties of the following div element.
// The color should be #77dd7, background color should be #fdfd96 and the width should be set to 100px

<div id="div1">
    <p>Arrays rocks</p>
</div>

let div = document.getElementById("div1");

div.style.color = "#77dd7"
div.style.width = "100px"
div.style.backgroundColor = "fdfd96"

// Using the getElementById we grab the div by the id name
// Since we saved it to a variable we can access all the props and change everything
