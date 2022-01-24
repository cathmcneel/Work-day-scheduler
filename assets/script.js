console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // January 22nd 2022, 12:24:22 pm);
$("currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

/* console.log(currentDay);
currentDay.text() = moment().format('MMMM Do YYYY, h:mm:ss a'); // January 22nd 2022, 12:24:22 pm);
*/


/* moment().format('dddd');                    // Saturday
moment().format("MMM Do YY");               // Jan 22nd 22
moment().format('YYYY [escaped] YYYY');     // 2022 escaped 2022
moment().format();  */

var currentDay = document.querySelector("#currentDay");
currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');

// select all buttons
var saveButtons = document.querySelectorAll(".save-button");
// create for loop
for (var i=0; i<saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", function() {
        // now we want to traverse the DOM. When we click a particular edit button, we want data about the elements next to it, above it, etc
        // we have selected the edit buttons, we first want to get the <td> class above it
       var nexttd = saveButtons[i].closest
        console.log(nexttd);
    }); 
}


//TRAVERSING THE 
// this means, given the structure of your HTML, you can select something with javascript

//Color Coding time boxes based on time of day (past, present, future)
var checkTime = function() {
    var hour = $(".hour").text().trim();
}
var hour = document.querySelector("data-time");
var time = moment(hour, "LT");


/*
// Can click into the box ot enter a task/item
var hourlyEvent = document.querySelectorAll(".w-75");
for (var i=0; i<hourlyEvent.length; i++) {
    hourlyEvent[i].addEventListener("click", function() {
      
    })
}

object.addEventListener("click", myScript);
var textInput = $("<textarea")
    .addClass("form-control")
    .val(text);

    */

    var tasks = {};

    var createTask = function(taskText, taskDate, taskList) {
      // create elements that make up a task item
      var taskLi = $("<li>").addClass("list-group-item");
      var taskSpan = $("<span>")
        .addClass("badge badge-primary badge-pill")
        .text(taskDate);
      var taskP = $("<p>")
        .addClass("m-1")
        .text(taskText);

        