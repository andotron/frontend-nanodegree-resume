var bio = {
    name:'Andy Chen',
    role:'Aspiring Front-End Engineer',
    contacts: {
        mobile:'555-555-5555',
        email: 'achen210@gmail.com', 
        twitter: '@iandosan',
        github: 'andotron',
        location: 'California'
    },
    biopic: 'images/me.jpg',
    welcomeMessage: 'Hello, welcome to my online resume',
    skills: ['JavaScript', 'CSS', 'HTML']
};

var work = {
    jobs: [
        {
            employer: 'Self',
            title: 'Student',
            yearsWorked: 'April 2018 - Current',
            city: 'SF',
            description: 'Teaching myself how to code!'
        },
        {
            employer: 'BBG',
            title: 'ASM',
            yearsWorked: '2016 - 2018',
            city: 'SF',
            description: 'Making people happy!'
        }
    ]
}

var education = {
    schools: [
        {    
            name: 'UCSC',
            dates: '2012 - 2014',
            location: 'Santa Cruz',
            degree: 'B.S Biological Sciences',
            major: ['Biology']
        }

    ]
}

var projects = {
    projects:[
        {   
            title: 'Front end nano degree - UDACITY',
            dates: '2018',
            description: 'Create an online resume'
        }
    ]
}//head intro
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
//contact
var formattedMobileInfo = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmailInfo = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitterInfo = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcomeMsg);
$("#topContacts").append(formattedMobileInfo);
$("#topContacts").append(formattedEmailInfo);
$("#topContacts").append(formattedTwitterInfo);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLocation);

//skills
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
}
//job exp
(function displaywork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedEmployerAndTitle = formattedWorkEmployer + formattedWorkTitle;
        $(".work-entry:last").append(formattedEmployerAndTitle);
    
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].yearsWorked);
        $(".work-entry:last").append(formattedWorkDates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].city);
        $(".work-entry:last").append(formattedWorkLocation);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedWorkDescription);
    }
})()

//button to change format of head intro
$("#main").append(internationalizeButton);


function inName() {
    var nameArr = bio.name.split(' ');
    nameArr = `${nameArr[0]} ${nameArr[1].toUpperCase()}`;
	return nameArr;
}

//projects

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);
    }
}
projects.display();
//school

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry").append(formattedSchoolName);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry").append(formattedSchoolDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates)
        $(".education-entry").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLlocation.replace("%data%", education.schools[school].location);
        $(".education-entry").append(formattedSchoolLocation);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry").append(formattedSchoolMajor);
    }
}
education.display();
//map
// $("#mapDiv").append(googleMap);

// // var formatted.replace("%data%")
// // var formatted.replace("%data%")
// // var formatted.replace("%data%")
// // var formatted.replace("%data%")
// // var formatted.replace("%data%")
// // var formatted.replace("%data%")
// // var formatted.replace("%data%")
// // var formatted.replace("%data%")


// $("#workExperience").append(formattedWorkTitle);
// $("#workExperience").append(formattedWorkEmployer);
// $("#workExperience").append(formattedWorkDates);
// $("#workExperience").append(formattedWorkLocation);

// $("#education").append(formattedSchoolName);
// $("#education").append(formattedSchoolDates);
// $("#education").append(formattedSchoolLocation);
// $("#education").append(formattedSchoolDegree);
// $("#education").append(formattedSchoolLocation);
