
//Bio Object;

var bio= {

	"name":"Juan Manuel Sánchez",
	"role": "Front End Web Developer",
	"contacts": {
		"mobile":"567 890 123",
		"email": "juanwip@gemail.com",
		"github": "juanwip",
		"twiter":"@juanwip",
		"location":"Bilbao"
	     },
	"pictureURL": "images/fry.jpg", 
	"welcomessage": "Lorem ipsum dolor sit amet etc, etc, etc!",
	"skills": ["HTML", "JAVASCRIPT", "CSS" ],

 display: function(){

  var formattedRole= HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  var formattedName= HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedPictureUrl= HTMLbioPic.replace("%data%", bio.pictureURL);
  $("#header").append(formattedPictureUrl);
  var formattedWelcomessage= HTMLWelcomeMsg.replace("%data%", bio.welcomessage);
  $("#header").append(formattedWelcomessage);
 //Contact information:
  var formattedContactMobile= HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").prepend(formattedContactMobile);
  var formattedContactEmail= HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedContactEmail);
  var formattedContactGithub= HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedContactGithub);
  var formattedContactTwiter= HTMLtwitter.replace("%data%", bio.contacts.twiter);
  $("#topContacts").append(formattedContactTwiter);
  var formattedContactLocation= HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedContactLocation);

  //Footer contact section:
  var formattedFooterContactMobile= HTMLFootermobile.replace("%data%", bio.contacts.mobile);
  $("#footerContacts").prepend(formattedFooterContactMobile);
  var formattedFooterContactEmail= HTMLFooteremail.replace("%data%", bio.contacts.email);
  $("#footerContacts").append(formattedFooterContactEmail);
  var formattedFooterContactGithub= HTMLFootergithub.replace("%data%", bio.contacts.github);
  $("#footerContacts").append(formattedFooterContactGithub);
  
  //Internationalize button:
  $("#main").append(internationalizeButton);

if (bio.skills.length>0){
  //Skills:
    var formattedSkillsStart= HTMLskillsStart;
    $("#header").append(formattedSkillsStart);

   var formattedSkills= HTMLskills.replace("%data%", bio.skills[0]);
   $("#skills").append(formattedSkills);
   formattedSkills= HTMLskills.replace("%data%", bio.skills[1]);
   $("#skills").append(formattedSkills);
   formattedSkills= HTMLskills.replace("%data%", bio.skills[2]);
   $("#skills").append(formattedSkills);

      }
    }
 }

  bio.display();

//Work Object:

var work= {
  "jobs": [
  {
    "title":"Front End Ninja",
    "employer":"North by NortWest",
    "location":"Madrid",
    "dates":"2011 - 13",
    "description":"Lorem ipsum dolor sit amet etc, etc, etc."
  },
  {
    "title":"Front End Chief Ninja",
    "employer":"Bringing up my baby Ltd.",
    "location":"Barcelona",
    "dates":"2013 - 14",
    "description":"Lorem ipsum dolor sit amet etc, etc, etc."
  }
 ],

 display: function(){

    for(job in work.jobs) {
 
     var formattedWorkStart= HTMLworkStart;
     $("#workExperience").append(formattedWorkStart);
     var formattedWorkEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
     var formattedWorkTitle= HTMLworkTitle.replace("%data%", work.jobs[job].title);
     var formattedWorkLocation= HTMLworkLocation.replace("%data%", work.jobs[job].location);
     var formattedWorkYears= HTMLworkDates.replace("%data%", work.jobs[job].dates);
     var formattedWorkDescription=HTMLworkDescription.replace("%data%", work.jobs[job].description);
     $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle + formattedWorkLocation 
     + formattedWorkYears + formattedWorkDescription);
  
      }


   }

 }

  work.display();


//Project Object
 var projects= {

   "project": [
  {
    "title":"Mockup to Web Portfolio",
    "dates":"October 2014",
    "description":"Lorem ipsum dolor sit amet etc, etc, etc.1",
    "images":["images/197x148.gif","images/197x148.gif"]
  },
  {
    "title":"Interactive Resume",
    "dates":"November 2014",
    "description":"Lorem ipsum dolor sit amet etc, etc, etc.2",
    "images":["images/197x148.gif", "images/197x148.gif"]
  }
  ],
 
   display: function(){

    
     for(proyecto in projects.project){

      var formattedProjectStart= HTMLprojectStart;
      $("#projects").append(formattedProjectStart);
      var formattedProjectTitle= HTMLprojectTitle.replace("%data%", projects.project[proyecto].title);
      var formattedProjectDates= HTMLprojectDates.replace("%data%", projects.project[proyecto].dates);
      var formattedProjectDescription= HTMLprojectDescription.replace("%data%", projects.project[proyecto].description);
      $(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription);
      var formattedModalStart= HTMLmodalStart;
      $("#myModal").append(formattedModalStart);
      var formattedProjectModalTitle= HTMLmodalTitle.replace("%data%", projects.project[proyecto].title);
      var formattedProjectModalDescription= HTMLmodalDescription.replace("%data%", projects.project[proyecto].description);
      var formattedModalClose= HTMLmodalClose;
      //$("#myModal").append(formattedProjectModalTitle);
      //$("#myModal").append(formattedProjectModalDescription);
      $(".modal-entry:last").append(formattedProjectModalTitle + formattedProjectModalDescription + formattedModalClose);
      
       if(projects.project[proyecto].images.length>0){

        for(image in projects.project[proyecto].images){

          var formattedProjectImages= HTMLprojectImage.replace("%data%", projects.project[proyecto].images[image]);
           $(".project-entry:last").append(formattedProjectImages);



             }
           }
         }
        
      }
   
  }



      projects.display(); 


//Education Object:
var education= {
  "schools": [
  {
    "name":"University of South Carolina",
    "degree":"Bacherlor on Computer Science",
    "dates":"2008 - 2012",
    "location":"Charleston",
    "major":["Computer Science"]
 },
 {
    "name":"Ohio State University",
    "degree":"Applied Computer Science",
    "dates":"2012 - 2013",
    "location":"Ohio",
    "major":["Computer Science"]
  }
  ],

  "onlineCourses": [
   {

   	"title":"Web Application Architectures",
   	"school":"University of New Mexico - Coursera",
    "dates":"August - September 2014",
    "url": "https://www.coursera.org/course/webapplications"
   }
  ],

   display: function(){

   
    for(school in education.schools){

     var formattedEducationStart= HTMLschoolStart;
     $("#education").append(formattedEducationStart);
     var formattedSchoolName= HTMLschoolName.replace("%data%", education.schools[school].name);
     var formattedScoolDegree= HTMLschoolDegree.replace("%data%", education.schools[school].degree);
     var formattedSchoolDates= HTMLschoolDates.replace("%data%", education.schools[school].dates);
     var formattedSchoolLocation= HTMLschoolLocation.replace("%data%", education.schools[school].location);
     var formattedSchoolMajor= HTMLschoolMajor.replace("%data%", education.schools[school].major);
     $(".education-entry:last").append(formattedSchoolName + formattedScoolDegree + formattedSchoolDates +
     formattedSchoolLocation + formattedSchoolMajor);

        }

    for(course in education.onlineCourses){
       
      var formattedOnlineCourse= HTMLonlineClasses;
      $(".education-entry:last").append(HTMLonlineClasses);
      var formattedOnlineCourseTitle= HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      var formattedOnlineSchool= HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      var formattedOnlineDates= HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);  
      var formattedOnlineCourseUrl= HTMLonlineURL.replace("%url%", education.onlineCourses[course].url).replace("%data%", education.onlineCourses[course].school);
      $(".education-entry:last").append( formattedOnlineCourseTitle + formattedOnlineSchool + 
          formattedOnlineDates + formattedOnlineCourseUrl);
       
         }   
      }
 }
 
 
      education.display(); 


//Map object:
var map= {

  init: function() {
   
    var map;
    var locations;        
    var mapOptions = {
     disableDefaultUI: true
     };
   
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    function locationFinder() {
    
    var locations = [];
    locations.push(bio.contacts.location);
    for (var school in education.schools) {
     locations.push(education.schools[school].location);
    }

   
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;

    }


    function createMapMarker(placeData) {

   
    var lat = placeData.geometry.location.lat();  
    var lon = placeData.geometry.location.lng();  
    var name = placeData.formatted_address;   
    var bounds = window.mapBounds;            

    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
    
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    bounds.extend(new google.maps.LatLng(lat, lon));
    
    map.fitBounds(bounds);

    map.setCenter(bounds.getCenter());

   }


   function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0])
     }
   }

   function pinPoster(locations) {

    var service = new google.maps.places.PlacesService(map);
    
    for (place in locations) {

      var request = {
        query: locations[place]
      }

      service.textSearch(request, callback);
      }
   }

   window.mapBounds = new google.maps.LatLngBounds();

  
   locations = locationFinder();
   pinPoster(locations);

   window.addEventListener('resize', function(e) {
   map.fitBounds(mapBounds);
  });
  
  },

  display: function() {

      window.addEventListener('load', map.init);

      $('#mapDiv').append(googleMap);
  }

}



     map.display(); 










  
  






