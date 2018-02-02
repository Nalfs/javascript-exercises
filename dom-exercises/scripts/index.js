function js_style()
{
    text.style.fontSize = "14pt";
    text.style.fontFamily = "Comic Sans MS";
    text.style.color = "green";
}

/*
 button.addEventListener('click', function() {
 paragraph.setAttribute("style", "color:green; font-size: 40px");

 }




function othername() {
    var input = document.getElementById("userInput").value;
    var inputTwo = document.getElementById("userInput2").value;
    alert(input + ' ' + inputTwo);
}

var buttonOne = document.getElementById("submit");
var link = document.getElementById('link');

    buttonOne.addEventListener('click', function() {
        var id = link.getAttribute('id');
        var href = link.getAttribute('href');
        var target = link.getAttribute('target');
        var hreflang = link.getAttribute('hreflang');
    alert("The info you've requested is: " + ' ' + id + ' ' + href + ' ' + target + ' ' + hreflang);
});


var button = document.getElementById("submit");
var buttonTwo = document.getElementById("remove");

button.addEventListener('click', function() {
    var table = document.getElementById("table");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = "1001";
});

buttonTwo.addEventListener('click', function() {
    document.getElementById("table").deleteRow(0);
});


var onresize = function() {
    width = document.body.clientWidth;
    height = document.body.clientHeight;

    document.write("RESIZED");

}
window.addEventListener("resize", onresize);

 */


//prevent the normal submission of the form
var textInput = document.getElementById('text');



document.querySelector('form.pure-form').addEventListener('submit', function (e) {
    var get = textInput.getAttribute('value');

    e.preventDefault();

    alert(textInput.value +' ' + get);
});