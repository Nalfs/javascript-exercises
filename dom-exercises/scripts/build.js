/*Now using JavaScript you should write code that creates the following in body:
div element containing: h1 element and a p element, both with text content
img element with an image of your choice */


var div = document.createElement("div");
div.style.width = "200px";
div.style.height = "200px";
div.style.background = "red";

document.body.appendChild(div);

var hOne = document.createElement("h1");
var textOne = document.createTextNode("My first h1 text");
hOne.appendChild(textOne);
var existingElementTwo = document.getElementsByTagName("div")[0];
existingElementTwo.appendChild(hOne);

var paragraph = document.createElement("p");
var textTwo = document.createTextNode("My first paragraph text");
paragraph.appendChild(textTwo);
var existingElementOne = document.getElementsByTagName("div")[0];
existingElementOne.appendChild(paragraph);


var img = document.createElement("img");
img.style.width = "600px";
img.style.height = "600px";
img.style.borde = "1px solid black";

document.body.appendChild(img);


img.src = "http://storage-cube.quebecormedia.com/v1/dynamic_resize?quality=75&size=1200x1200&src=http%3A%2F%2Fstorage-cube.quebecormedia.com%2Fv1%2Fthn_prod%2Fthe_hockey_news%2Ff1650bce0c57cc98c736cb9acfe1600048a04b37%2FDerek-Roy-Team-Canada-featured.jpg";




