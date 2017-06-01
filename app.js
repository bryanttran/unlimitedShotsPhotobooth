// Module
var USPApp = angular.module('USPApp', ['ngRoute']);

// Routes
USPApp.config(function($routeProvider) {
    $routeProvider

        // Home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // About page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // Contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })

        // Services page
        .when('/services', {
            templateUrl : 'pages/services.html',
            controller  : 'servicesController'
        });
});



// Controllers
USPApp.controller('mainController', function($scope) {
    $scope.message = 'Home';
});

USPApp.controller('aboutController', function($scope) {
    $scope.message = 'About';
});

USPApp.controller('contactController', function($scope) {
    $scope.message = 'Contact';
});

USPApp.controller('servicesController', function($scope) {
    $scope.message = 'Services';
});
