/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = "<h1 id='name' class='small-12 columns'>%data%</h1>";
var HTMLheaderRole = "<span>%data%</span><hr/>";

var HTMLcontactGeneric = "<li class='flex-item'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></li>";
var HTMLmobile = "<li class='flex-item'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>";
var HTMLemail = "<li class='flex-item'><span class='orange-text'>email</span><span class='white-text'>%data%</span></li>";
var HTMLtwitter = "<li class='flex-item'><span class='orange-text'>twitter</span><span class='white-text'>%data%</span></li>";
var HTMLgithub = "<li class='flex-item'><span class='orange-text'>github</span><span class='white-text'>%data%</span></li>";
var HTMLblog = "<li class='flex-item'><span class='orange-text'>blog</span><span class='white-text'>%data%</span></li>";
var HTMLlocation = "<li class='flex-item'><span class='orange-text'>location</span><span class='white-text'>%data%</span></li>";

var HTMLbioPic = "<img class='img-responsive' src='%data%' class='biopic'>";
var HTMLWelcomeMsg = "<span class='welcome-message'>%data%</span>";

var HTMLskillsStart = "<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>";
var HTMLskills = "<li class='flex-item'><span class='white-text'>%data%</span></li>";

var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<a href='#'>%data%";
var HTMLworkTitle = " - %data%</a>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<p><br>%data%</p>";

var HTMLprojectStart = "<div class='project-entry'></div>";
var HTMLprojectTitle = "<a href='#'>%data%</a>";
var HTMLprojectDates = "<div class='date-text'>%data%</div>";
var HTMLprojectDescription = "<p><br>%data%</p>";
var HTMLprojectImage = "<img data-reveal-id='myModal' src='%data%'>";

var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<a href='#'>%data%";
var HTMLschoolDegree = " -- %data%</a>";
var HTMLschoolDates = "<div class='date-text'id='date-school'>%data%</div>";
var HTMLschoolLocation = "<div class='location-text'id='location-school'>%data%</div>";
var HTMLschoolMajor = "<em><br>Major: %data%</em>"

var HTMLonlineClasses = "<h3 id='courses' >Online Classes</h3>";
var HTMLonlineTitle = "<a href='#'>%data%";
var HTMLonlineSchool = " - %data%</a>";
var HTMLonlineDates = "<div class='date-text'>%data%</div>";
var HTMLonlineURL= "<a id='onlineURL' href='%url%'>%data%</a>";

var HTMLFootercontactGeneric = "<li class='flex-item'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></li>";
var HTMLFootermobile = "<li class='flex-item'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>";
var HTMLFooteremail = "<li  class='flex-item'><span class='orange-text'>email</span><span class='white-text'>%data%</span></li>";
var HTMLFootergithub = "<li class='flex-item'><span class='orange-text'>github</span><span class='white-text'>%data%</span></li>";

var HTMLmodalStart="<div class='modal-entry'></div>";
var HTMLmodalTitle= "<h2>%data%</h2>";
var HTMLmodalDescription= "<p class='lead'><br>%data%</p>";
var HTMLmodalClose= "<a class='close-reveal-modal'>&#215;</a>"




var internationalizeButton = "<button>Internationalize</button>";
var googleMap = "<div id='map'></div>";




function inName() {
  
  var str= bio.name;
  var space= " ";
  var myArray= str.split(space);



  var firstName= myArray[0];
  var firstLetterName= firstName[0].toUpperCase();
  var restOfName= firstName.slice(1, firstName.length);
  var secondName= myArray[1];
  var secondNameUpperCase= secondName.toUpperCase();
  var thirdName= myArray[2];
  var thirdNameUpperCase= thirdName.toUpperCase();

  var newName= firstLetterName+restOfName+ space + secondNameUpperCase + space + thirdNameUpperCase;

  return newName;

  //console.log(newName);

 }


$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
 })


//Reference page for this exercise: http://stackoverflow.com/a/3236129
clickLocations = [];
var x=null;
var y= null;

function logClicks(x,y) {
  clickLocations.push(
    {
      "x": x,
      "y": y
    }
  );
  console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function(loc) {
  // your code goes here!
  x= loc.pageX;
  y= loc.pageY;

  logClicks(x,y);
  

 });





