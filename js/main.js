// JavaScript Document


(function () {
	
	var model= {
		
		bio: {
			
		  "name":"Juan Manuel Sánchez",
	      "role": "Front End Web Developer",
	      "contacts": {
		       "mobile":"567 890 123",
		       "email": "juanwip@gemail.com",
		       "github": "juanwip",
		       "twitter":"@juanwip",
		       "location":"Bilbao"
	            },
	     "pictureURL":"images/fry.jpg", 
	     "welcomessage": "Lorem ipsum dolor sit amet etc, etc, etc!",
	     "skills": ["HTML", "JAVASCRIPT", "CSS" ]
			
		},
		
		jobs: [
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
		
		projects: [
		
		   {
			   "title":"Mockup to Web Portfolio",
               "dates":"October 2014",
               "description":"Lorem ipsum dolor sit amet etc, etc, etc.1",
               "images":["images/197x148.gif","images/197x148.gif"],
			   "modalID": "myModal1"
			   
		   },
		   
		   {
			   "title":"Interactive Resume",
               "dates":"November 2014",
               "description":"Lorem ipsum dolor sit amet etc, etc, etc.2",
               "images":["images/197x148.gif", "images/197x148.gif"],
			    "modalID": "myModal2"
			   
		   }
		   
		],
		
		schools: [
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
		
		onlineCourses: [
		
		   {
			   "title":"Web Application Architectures",
            	"school":"University of New Mexico - Coursera",
                "dates":"August - September 2014",
               "url":"https://www.coursera.org/course/webapplications"
			   
		   }
		   
		],
		
		templateBio: {
		
		      "HTMLheaderName":"<h1 id='name' class='small-12 columns'>%data%</h1>",
              "HTMLheaderRole":"<span>%data%</span><hr/>",
			  "HTMLcontactGeneric":"<li class='flex-item'><span class='orange-text'>%contact%</span><spanclass='white-text'>%data%</span></li>",
			  "HTMLmobile":"<li class='flex-item'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>",
			  "HTMLemail":"<li class='flex-item'><span class='orange-text'>email</span><span class='white-text'>%data%</span></li>",
			  "HTMLtwitter":"<li class='flex-item'><span class='orange-text'>twitter</span><span class='white-text'>%data%</span></li>",
			  "HTMLgithub":"<li class='flex-item'><span class='orange-text'>github</span><span class='white-text'>%data%</span></li>",
              "HTMLblog":"<li class='flex-item'><span class='orange-text'>blog</span><span class='white-text'>%data%</span></li>",
			  "HTMLlocation":"<li class='flex-item'><span class='orange-text'>location</span><span class='white-text'>%data%</span></li>",
			  "HTMLbioPic":"<img class='img-responsive' src='%data%' class='biopic'>",//Picture
			  "HTMLWelcomeMsg":"<span class='welcome-message'>%data%</span>",//Welcome Message
			  "HTMLskillsStart":"<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills'class='flex-box'></ul>",
			  "HTMLskills":"<li class='flex-item'><span class='white-text'>%data%</span></li>",//Skills
			  "HTMLFootercontactGeneric":"<li class='flex-item'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></li>",
              "HTMLFootermobile":"<li class='flex-item'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>",
              "HTMLFooteremail":"<li  class='flex-item'><span class='orange-text'>email</span><span class='white-text'>%data%</span></li>",
              "HTMLFootergithub":"<li class='flex-item'><span class='orange-text'>github</span><span class='white-text'>%data%</span></li>"
			  
		  },
		  
		  templateButtons: {
			  
			  "internationalizeButton":"<button>Internationalize</button>"
		  },
		  
		  templateSkills: {
			  
			  "HTMLskillsStart":"<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>",
              "HTMLskills":"<li class='flex-item'><span class='white-text'>%data%</span></li>"
			  
		  },
		  
		  templateWork: {
			  
			  "HTMLworkStart":"<div class='work-entry'></div>",
              "HTMLworkEmployer":"<a href='#'>%data%",
              "HTMLworkTitle":" - %data%</a>",
              "HTMLworkDates":"<div class='date-text'>%data%</div>",
              "HTMLworkLocation":"<div class='location-text'>%data%</div>",
              "HTMLworkDescription":"<p><br>%data%</p>"
			  
		  },
		  
		  templateProject: {
			  
			  "HTMLprojectStart":"<div class='project-entry'></div>",
              "HTMLprojectTitle":"<a href='#'>%data%</a>",
              "HTMLprojectDates":"<div class='date-text'>%data%</div>",
              "HTMLprojectDescription":"<p><br>%data%</p>",
              "HTMLprojectImage":"<img data-reveal-id='%id%' src='%data%' class='projectimage'>",
			  "HTMLmodal":"<div id='%id%' class='reveal-modal' data-reveal></div>",
			  "HTMLmodalStart":"<div class='modal-entry'></div>",
			  "HTMLmodalTitle":"<h2>%data%</h2>",
              "HTMLmodalDescription":"<p class='lead'><br>%data%</p>",
              "HTMLmodalClose": "<a class='close-reveal-modal'>&#215;</a>"
		  },
		  
		  templateEducation: {
			  
			 "HTMLschoolStart":"<div class='education-entry'></div>",
             "HTMLschoolName":"<a href='#'>%data%",
             "HTMLschoolDegree":" -- %data%</a>",
             "HTMLschoolDates":"<div class='date-text'id='date-school'>%data%</div>",
             "HTMLschoolLocation":"<div class='location-text'id='location-school'>%data%</div>",
             "HTMLschoolMajor":"<em><br>Major: %data%</em>",
			 "HTMLonlineClasses":"<h3 id='courses' >Online Classes</h3>",
             "HTMLonlineTitle":"<a href='#'>%data%",
             "HTMLonlineSchool":" - %data%</a>",
             "HTMLonlineDates":"<div class='date-text'>%data%</div>",
             "HTMLonlineURL":"<a id='onlineURL' href='%url%'>%data%</a>"
			  
		  },

		  templateMap: {

            "HTMLgoogleMap":"<div id='map'></div>"

		  }

	};
	
	
	var octopus= {
		
		init: function() {
		
		    viewBio.initBioData();
			viewButtons.initButtons();
			viewSkills.initSkills();
			viewWork.initWorks();
			viewProject.initProjects();
			viewEducation.initEducation();
			viewMap.display();
		 	
		},
		
		getBioData: function() {
			
			return model.bio;
			
		},
		
		getJobsData: function() {
		
		    return model.jobs;
		 	
		},
		
		getProjectsData: function() {
		
		    return model.projects;
		 	
		},
		getschoolsData: function() {
		
		    return model.schools;
		 	
		},
		
		getonLineCoursesData: function() {
			
			return model.onlineCourses;
		},
		
		getWorksData: function() {
			
			return model.jobs;
			
		},
		
		getTemplateBio: function() {
			
			return model.templateBio;
		},
		
		getTemplateButtons: function() {
		
		    return model.templateButtons;	
		},
		getTemplateSkills: function() {
			
			return model.templateSkills;
		},
		
		getTemplateWorks: function() {
			
			return model.templateWork;
		},
		
		getTemplateProject: function() {
		
			return model.templateProject;
		}, 
		
		getTemplateEducation: function() {
		
		    return model.templateEducation;	
		},

		getTemplateMap: function() {


			return model.templateMap;
		}
		
	
		
	};
	
	
	
	var viewBio= {
		
		initBioData: function() {
			
			this.bioData= octopus.getBioData();
			this.templateBio= octopus.getTemplateBio();
			this.HTMLheaderName= this.templateBio.HTMLheaderName;
			this.HTMLheaderRole= this.templateBio.HTMLheaderRole;
			this.HTMLcontactGeneric= this.templateBio.HTMLcontactGeneric;
			this.HTMLbioPic= this.templateBio.HTMLbioPic;
			this.HTMLWelcomeMsg= this.templateBio.HTMLWelcomeMsg;
			this.HTMLmobile= this.templateBio.HTMLmobile;
			this.HTMLemail= this.templateBio.HTMLemail;
			this.HTMLgithub= this.templateBio.HTMLgithub;
			this.HTMLtwitter= this.templateBio.HTMLtwitter;
			this.HTMLlocation= this.templateBio.HTMLlocation;
			this.HTMLFootermobile= this.templateBio.HTMLFootermobile;
			this.HTMLFooteremail= this.templateBio.HTMLFooteremail;
			this.HTMLFootergithub= this.templateBio.HTMLFootergithub;
			this.filterBioData();
		
		},
		
		filterBioData: function() {
			//Header
			this.formattedRole= this.HTMLheaderRole.replace("%data%", this.bioData.role);
			this.formattedName= this.HTMLheaderName.replace("%data%", this.bioData.name);
			this.formattedPicture= this.HTMLbioPic.replace("%data%", this.bioData.pictureURL);
			//Welcome message
			this.formattedWelcomeMsg=this.HTMLWelcomeMsg.replace("%data%", this.bioData.welcomessage);
			//Top contacts
			this.formattedContactMobile= this.HTMLmobile.replace("%data%", this.bioData.contacts.mobile);
			this.formattedContactEmail= this.HTMLemail.replace("%data%", this.bioData.contacts.email);
			this.formattedContactGithub= this.HTMLgithub.replace("%data%", this.bioData.contacts.github);
			this.formattedContactTwitter=this.HTMLtwitter.replace("%data%", this.bioData.contacts.twitter);
			this.formattedContactLocation=this.HTMLlocation.replace("%data%", this.bioData.contacts.location);
			//Footer contacts
		this.formattedFooterContactMobile= this.HTMLFootermobile.replace("%data%", this.bioData.contacts.mobile);
		this.formattedFooterContactEmail= this.HTMLFooteremail.replace("%data%", this.bioData.contacts.email);
		this.formattedFooterContactGithub= this.HTMLFootergithub.replace("%data%", this.bioData.contacts.github);
			console.log(this.formattedFooterContactEmail);
			
		    this.renderBio();
		},
		
		renderBio: function() {
			var $header= $("#header");
			var $topContacts= $("#topContacts");
			var $footerContacts=$("#footerContacts");
            $header.prepend(this.formattedRole).prepend(this.formattedName).append(this.formattedPicture).append(this.formattedWelcomeMsg);
			$topContacts.prepend(this.formattedContactMobile).append(this.formattedContactEmail).append(this.formattedContactGithub).append(this.formattedContactTwitter).append(this.formattedContactLocation);
			$footerContacts.prepend(this.formattedFooterContactMobile).append(this.formattedFooterContactEmail).append(this.formattedFooterContactGithub);
			
		}
		
	};
	
	var viewButtons= {
		
		initButtons: function() {
			this.buttonsData= octopus.getTemplateButtons();
			this.internationalizeButton= this.buttonsData.internationalizeButton;
			//this.bioData= octopus.getBioData();
			
			this.renderButtons();
			
		},
		
		renderButtons: function() {
			
			var $main= $("#main");
			$main.append(this.internationalizeButton);
			var clickLocations = [];
            var x=null;
            var y= null;
			
			function inName() {
              var bioData= octopus.getBioData(),
                  str= bioData.name,
                  space= " ",
                  myArray= str.split(space),
                  firstName= myArray[0],
                  firstLetterName= firstName[0].toUpperCase(),
                  restOfName= firstName.slice(1, firstName.length),
                  secondName= myArray[1],
                  secondNameUpperCase= secondName.toUpperCase(),
                  thirdName= myArray[2],
                  thirdNameUpperCase= thirdName.toUpperCase(),
                  newName= firstLetterName+restOfName+ space + secondNameUpperCase + space + thirdNameUpperCase;
                  //console.log(newName);

                  return newName;

                }

             $('button').click(function() {
               var iName = inName() || function(){};
               $('#name').html(iName);  
            
           });


         
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
      
            x= loc.pageX;
            y= loc.pageY;

            logClicks(x,y);
  
           });
	    }
		
	  };
	
	var viewSkills= {
		
		initSkills: function () {
			this.skillsData= octopus.getTemplateSkills();
			this.HTMLskillsStart= this.skillsData.HTMLskillsStart;
			this.HTMLskills= this.skillsData.HTMLskills;
			this.filterSkillsData();
			
		},
		
		filterSkillsData: function () {
			this.bioData= octopus.getBioData();
			this.formattedSkillsStart= this.HTMLskillsStart;
			this.formattedSkills1= this.HTMLskills.replace("%data%", this.bioData.skills[0]);
			this.formattedSkills2= this.HTMLskills.replace("%data%", this.bioData.skills[1]);
			this.formattedSkills3= this.HTMLskills.replace("%data%", this.bioData.skills[2]);
			
			this.renderSkills();
			
		},
		
		renderSkills: function () {
			if(this.bioData.skills.length>0) {
			var $header= $("#header");
			$header.append(this.formattedSkillsStart);
			var $skills= $("#skills");
			$skills.append(this.formattedSkills1).append(this.formattedSkills2).append(this.formattedSkills3);
			}
		}
		
	};
	
	var viewWork= {
		
	     initWorks: function() {
			 
			  this.worksData= octopus.getJobsData();
			  this.templateWorks=octopus.getTemplateWorks();
			  var i=0;
			 for( i; i<this.worksData.length; i++) {
			    var $workExperience= $("#workExperience");
				var job= this.worksData[i];
			    var formattedWorkStart= this.templateWorks.HTMLworkStart;
				$workExperience.append(formattedWorkStart);
				var formattedWorkEmployer=this.templateWorks.HTMLworkEmployer.replace("%data%", job.employer);
				var formattedWorkTitle=this.templateWorks.HTMLworkTitle.replace("%data%", job.title);
				var formattedWorkLocation=this.templateWorks.HTMLworkLocation.replace("%data%", job.location);
				var formattedWorkYears= this.templateWorks.HTMLworkDates.replace("%data%", job.dates);
				var formattedWorkDescription= this.templateWorks.HTMLworkDescription.replace("%data%", job.description);
				var $workEntryLast= $(".work-entry:last");
				$workEntryLast.append(formattedWorkEmployer + formattedWorkTitle + formattedWorkLocation +formattedWorkYears + formattedWorkDescription);
			 };	 
		 }
	};
	
	var viewProject= {
		   
		   initProjects:function() {
			   
		       this.templateProjects= octopus.getTemplateProject();
			   this.projectData= octopus.getProjectsData();
			   var i=0;
			   var j=0;
			   for( i; i<this.projectData.length; i++) {
			   
			      var $projects= $("#projects");
				  var $modal=$("#modals");
				  var project= this.projectData[i];
				
				  var formattedProjectStart= this.templateProjects.HTMLprojectStart;
				  var formattedModal= this.templateProjects.HTMLmodal.replace("%id%", project.modalID);
				  var formattedModalStart= this.templateProjects.HTMLmodalStart;
				  $projects.append(formattedProjectStart);
				  $modal.append(formattedModal);
				  var $formattedModal=$(".reveal-modal"); 
				  $formattedModal.append(formattedModalStart);
				  var formattedProjectTitle= this.templateProjects.HTMLprojectTitle.replace("%data%", project.title);
				  var formattedProjectDates= this.templateProjects.HTMLprojectDates.replace("%data%", project.dates);
				  var formattedProjectDescription= this.templateProjects.HTMLprojectDescription.replace("%data%", project.description);
				  var $projectEntryLast= $(".project-entry:last");
				  $projectEntryLast.append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription);
			      var formattedProjectModalTitle= this.templateProjects.HTMLmodalTitle.replace("%data%", project.title);
				  var formattedProjectModalDescription= this.templateProjects.HTMLmodalDescription.replace("%data%", project.description);
				 var formattedModalClose= this.templateProjects.HTMLmodalClose;
				 var $modalEntryLast= $(".modal-entry:last");
				 $modalEntryLast.append(formattedProjectModalTitle + formattedProjectModalDescription + formattedModalClose);
			 
				  if(project.images.length>0) {
				  for (image in project.images) {
					  
					 var formattedProjectImages= this.templateProjects.HTMLprojectImage.replace("%data%", project.images[image]).replace("%id%", project.modalID);
					  
					$projectEntryLast.append(formattedProjectImages);
					  
				      };
					  
				  }
				  
			   };
		   
		 }
	};
	
	
	var viewEducation= {
		
		
		   initEducation: function() {
	              this.templateEducation= octopus.getTemplateEducation();
				  this.schoolsData=octopus.getschoolsData();	
				  this.onlineCoursesData= octopus.getonLineCoursesData();
				  var i=0;
				  var j=0;
				  var $education= $("#education");
				  for(i; i<this.schoolsData.length; i++) {
					  
					var school= this.schoolsData[i];
					var formattedSchoolStart= this.templateEducation.HTMLschoolStart;
					
					$education.append(formattedSchoolStart);
					var formattedSchoolName= this.templateEducation.HTMLschoolName.replace("%data%", school.name);
					var formattedSchoolDegree= this.templateEducation.HTMLschoolDegree.replace("%data%", school.degree);
					var formattedSchoolDates= this.templateEducation.HTMLschoolDates.replace("%data%", school.dates);
					var formattedSchoolLocation= this.templateEducation.HTMLschoolLocation.replace("%data%", school.location);
					var formattedSchoolMajor= this.templateEducation.HTMLschoolMajor.replace("%data%", school.major);
					var $educationEntryLast= $(".education-entry:last");
				  $educationEntryLast.append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor);
				  
				}
				
				for(j; j<this.onlineCoursesData.length; j++) {
					
					var onlineCourse= this.onlineCoursesData[j];
					var formattedOnlineClassesTitle= this.templateEducation.HTMLonlineClasses;
					
					$educationEntryLast.append(formattedOnlineClassesTitle);
					
					var formattedOnlineClassesTitle= this.templateEducation.HTMLonlineTitle.replace("%data%", onlineCourse.title);
					var formattedOnlineClassesSchool= this.templateEducation.HTMLonlineSchool.replace("%data%", onlineCourse.school);
					
					var formattedOnlineClassesDates= this.templateEducation.HTMLonlineDates.replace("%data%", onlineCourse.dates);
					var formattedOnlineClassesCourseUrl= this.templateEducation.HTMLonlineURL.replace("%url%", onlineCourse.url).replace("%data%", onlineCourse.school);
					
					var $educationEntryLast= $(".education-entry:last");
					
					$educationEntryLast.append(formattedOnlineClassesTitle + formattedOnlineClassesSchool + formattedOnlineClassesDates + formattedOnlineClassesCourseUrl);
					
					
				}
		   }
	};


	var viewMap= {

     init: function() {
          
          var map;
          var locations;        
          var mapOptions = {
          disableDefaultUI: true

          };
   
          map = new google.maps.Map(document.querySelector('#map'), mapOptions);


         function locationFinder() {
           var i=0;
           var j=0;
           var bioData= octopus.getBioData();
           var jobsData= octopus.getJobsData();
           var schoolsData= octopus.getschoolsData();
           var locations = [];
           locations.push(bioData.contacts.location);
           for(i; i<schoolsData.length; i++) {
					  
			var schools= schoolsData[i];
			var schoolsLocations= schools.location;
			locations.push(schoolsLocations);

		}
		  for(j; j<jobsData.length; j++) {

		  	var jobs= jobsData[j];
		  	var jobsLocations= jobs.location;
		  	locations.push(jobsLocations);
		  }

          console.log(locations);
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
       var googleMapTemplate= octopus.getTemplateMap();
       var formattedMap= googleMapTemplate.HTMLgoogleMap;
       $('#mapDiv').append(formattedMap);

      window.addEventListener('load', viewMap.init);
    }



};
	
	octopus.init();
}());
