var bio = {
    name:'Andy',
    role:'Aspiring Front-End Engineer',
    contactInfo: {
        mobile:'555-555-5555',
        email: 'achen210@gmail.com', 
        twitter: '@iandosan',
        github: 'andotron',
        location: 'California'
    },
    picture: 'images/me.jpg',
    welcomeMessage: 'Hello, welcome to my online resume',
    skills: ['JavaScript', 'CSS', 'HTML']
};

var work = {
    currentJob: 'Student',
    employer: 'Self',
    yearsWorked: 8,
    city: 'SF'
}

var education = {
    school: 'UCSC',
    yearsAttended: "2012 - 2014",
    city: 'Santa Cruz'
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//contact
var formattedMobileInfo = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmailInfo = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedTwitterInfo = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkill = HTMLskills.replace("%data%", bio.skills);
//work
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.currentJob);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.yearsWorked);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.city);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobileInfo);
$("#topContacts").append(formattedEmailInfo);
$("#topContacts").append(formattedTwitterInfo);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedSkill);

