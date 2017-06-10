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
    
    $scope.quote1 = {
        message : "Ian and Joey, the owners, are very professional, accommodating, easy to deal with and the nicest too. Your guests will enjoy taking their pictures because Ian makes them feel comfortable and will cue them to do their best and wackiest faces. Try them and you will never regret it!",
        name : "Nona Marie Olpindo Mejia"
    };
    
    $scope.quote2 = {
        message : "I recommend this photo booth to every occasion. Ian was so accommodating and very professional. All my guests were having fun and really enjoyed the unlimited shots. Thanks again and until next time.",
        name : "Neth Lazatin"
    };
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
