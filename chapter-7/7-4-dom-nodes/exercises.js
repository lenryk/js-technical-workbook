// 1. What is a NodeList?

// An array like object that holds all the elements from the querySelectorAll

// 2. Iterate through the following <p> elements and append the string "Bonus Player" to each one

<div class="container">
  <div class="row">
    <div class="col-sm-12">
      <p>BaaBara</p>
      <p>Poco</p>
      <p>Stardew</p>
      <p>LikeK</p>
    </div>
  </div>
</div>;

let pTags = document.querySelectorAll("p");

for (let i = 0; i < pTags.length; i++) {
  pTags[i].value += "Bonus Player";
}

// We could also use a forEach here

// 3. Remove the 2nd <p> from the div

let div = document.getElementsByClassName("col-sm-12")[0];

div.removeChild(pTags[1]);
