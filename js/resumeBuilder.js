var bio = {
    name:'Andy',
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
            yearsWorked: 8,
            city: 'SF'
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
        {   title: 'frontEnd nano degree',
            dates: '2018',
            description: 'Create an online resume'
        }
    ]
}


var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
}

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// //contact
var formattedMobileInfo = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmailInfo = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitterInfo = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

// //work
// var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.currentJob);
// var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
// var formattedWorkDates = HTMLworkDates.replace("%data%", work.yearsWorked);
// var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.city);
// //school
// var formattedSchoolName = HTMLschoolName.replace("%data%", education.school);
// var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.degree);
// var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.yearsAttended)
// var formattedSchoolLocation = HTMLlocation.replace("%data%", education.city);
// var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.major);
// // var formatted.replace("%data%")
// // var formatted.replace("%data%")
// // var formatted.replace("%data%")
// // var formatted.replace("%data%")
// // var formatted.replace("%data%")
// // var formatted.replace("%data%")
// // var formatted.replace("%data%")
// // var formatted.replace("%data%")
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobileInfo);
$("#topContacts").append(formattedEmailInfo);
$("#topContacts").append(formattedTwitterInfo);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLocation);


// $("#workExperience").append(formattedWorkTitle);
// $("#workExperience").append(formattedWorkEmployer);
// $("#workExperience").append(formattedWorkDates);
// $("#workExperience").append(formattedWorkLocation);

// $("#education").append(formattedSchoolName);
// $("#education").append(formattedSchoolDates);
// $("#education").append(formattedSchoolLocation);
// $("#education").append(formattedSchoolDegree);
// $("#education").append(formattedSchoolLocation);
