//a bunch of hooks and shortcuts
var form9 = document.getElementById("form9");
var form10 = document.getElementById("form10");
var form11 = document.getElementById("form11");
var form12 = document.getElementById("form12");
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var form4 = document.getElementById("form4");
var form5 = document.getElementById("form5");

var button9 = document.getElementById("button9");
var button10 = document.getElementById("button10");
var button11 = document.getElementById("button11");
var button12 = document.getElementById("button12");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");

var info9 = form9.value;
var info10 = form10.value;
var inf11 = form11.value;
var info12 = form12.value;
var info1 = form1.value;
var info2 = form2.value;
var info3 = form3.value;
var info4 = form4.value;
var info5 = form5.value;

//event listeners for buttons to set local storage based on input fields
button9.addEventListener("click", function () {
    event.preventDefault();
    console.log(form9.value);
    window.localStorage.setItem('info9', JSON.stringify(form9.value));
});
button10.addEventListener("click", function () {
    event.preventDefault();
    console.log(form10.value);
    window.localStorage.setItem('info10', JSON.stringify(form10.value));
});

button11.addEventListener("click", function () {
    event.preventDefault();
    console.log(form11.value);
    window.localStorage.setItem('info11', JSON.stringify(form11.value));
});
button12.addEventListener("click", function () {
    event.preventDefault();
    console.log(form12.value);
    window.localStorage.setItem('info12', JSON.stringify(form12.value));
});
button1.addEventListener("click", function () {
    event.preventDefault();
    console.log(form1.value);
    window.localStorage.setItem('info1', JSON.stringify(form1.value));
});
button2.addEventListener("click", function () {
    event.preventDefault();
    console.log(form2.value);
    window.localStorage.setItem('info2', JSON.stringify(form2.value));
});
button3.addEventListener("click", function () {
    event.preventDefault();
    console.log(form3.value);
    window.localStorage.setItem('info3', JSON.stringify(form3.value));
});
button4.addEventListener("click", function () {
    event.preventDefault();
    console.log(form4.value);
    window.localStorage.setItem('info4', JSON.stringify(form4.value));
});
button5.addEventListener("click", function () {
    event.preventDefault();
    console.log(form5.value);
    window.localStorage.setItem('info5', JSON.stringify(form5.value));
});

//loads saved local storage items to input fields
$(document).ready(function () {

    if (JSON.parse(window.localStorage.getItem('info9')) !== null) {
        form9.setAttribute('placeholder', "" + JSON.parse(window.localStorage.getItem('info9'))) + " \"\ ";
    };
    if (JSON.parse(window.localStorage.getItem('info10')) !== null) {
        form10.setAttribute('placeholder', "" + JSON.parse(window.localStorage.getItem('info10'))) + " \"\ ";
    };
    if (JSON.parse(window.localStorage.getItem('info11')) !== null) {
        form11.setAttribute('placeholder', "" + JSON.parse(window.localStorage.getItem('info11'))) + " \"\ ";
    };
    if (JSON.parse(window.localStorage.getItem('info12')) !== null) {
        form12.setAttribute('placeholder', "" + JSON.parse(window.localStorage.getItem('info12'))) + " \"\ ";
    };
    if (JSON.parse(window.localStorage.getItem('info1')) !== null) {
        form1.setAttribute('placeholder', "" + JSON.parse(window.localStorage.getItem('info1'))) + " \"\ ";
    };
    if (JSON.parse(window.localStorage.getItem('info2')) !== null) {
        form2.setAttribute('placeholder', "" + JSON.parse(window.localStorage.getItem('info2'))) + " \"\ ";
    };
    if (JSON.parse(window.localStorage.getItem('info3')) !== null) {
        form3.setAttribute('placeholder', "" + JSON.parse(window.localStorage.getItem('info3'))) + " \"\ ";
    };
    if (JSON.parse(window.localStorage.getItem('info4')) !== null) {
        form4.setAttribute('placeholder', "" + JSON.parse(window.localStorage.getItem('info4'))) + " \"\ ";
    };
    if (JSON.parse(window.localStorage.getItem('info5')) !== null) {
        form5.setAttribute('placeholder', "" + JSON.parse(window.localStorage.getItem('info5'))) + " \"\ ";
    };

});

//clock stuff
//momentjs hour (like bootstrap/jquery)



//loop over time blocks
setInterval(function () {
    var currentHour = moment().format('MMMM Do YYYY, h:mm a');
    document.getElementById("clock").innerHTML = currentHour;
},
    1000);
