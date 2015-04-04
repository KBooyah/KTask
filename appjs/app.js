/*

var app = angular.module('myApp',['myAppcontrollers','ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when("/", {templateUrl: "partials/index.html"});
        $routeProvider.when("/depts", {templateUrl: "partials/events.html", controller: "events"});
        $routeProvider.when("/events", {templateUrl: "partials/events.html", controller: "eventsMenu"});
        $routeProvider.when("/events/:event_id", {templateUrl: "partials/events.html", controller: "eventsMenu"});
        $routeProvider.when("/workshops",{templateUrl: "partials/workshops.html", controller: "workshopsMenu"});
        $routeProvider.when("/workshops/:workshop_id",{templateUrl: "partials/workshops.html", controller: "workshopsMenu"});
        $routeProvider.when("/contacts", {templateUrl: "partials/try-contacts.html", controller: "coming"});
        $routeProvider.when("/karnival", {templateUrl: "partials/karnival.html", controller: "coming"});
        $routeProvider.when("/guest-lecture", {templateUrl: "partials/guest-lecture.html", controller: "coming"});
        $routeProvider.when("/sponsors", {templateUrl: "partials/comingsoon.html", controller: "coming"});
        $routeProvider.when("/hospitality", {templateUrl: "partials/hospitality.html", controller: "coming"});
        $routeProvider.when("/xceed", {templateUrl: "partials/xceed.html", controller: "coming"});
        $routeProvider.when("/about-us", {templateUrl: "partials/aboutus.html", controller: "coming"});
        $routeProvider.when("/profile", {templateUrl: "partials/profile.html", controller: "coming"});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);


});
*/