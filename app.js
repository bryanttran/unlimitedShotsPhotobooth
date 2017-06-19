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

        // Photobooth page
        .when('/photobooth', {
            templateUrl : 'pages/services.html',
            controller  : 'photoboothController'
        })
	
		// Wedding page
        .when('/wedding', {
            templateUrl : 'pages/wedding.html',
            controller  : 'weddingController'
        })
	
		// Sound page
        .when('/sound', {
            templateUrl : 'pages/sound.html',
            controller  : 'soundController'
        });
});

//Form directive
USPApp.directive('contactForm', function(){
	return {
		templateUrl: 'directives/contact-form.html'
	};
});


// Controllers
USPApp.controller('mainController', function($scope, $timeout) {
    
    $scope.quote1 = {
        message : "Ian and Joey, the owners, are very professional, accommodating, easy to deal with and the nicest too. Your guests will enjoy taking their pictures because Ian makes them feel comfortable and will cue them to do their best and wackiest faces. Try them and you will never regret it!",
        name : "Nona Marie Olpindo Mejia"
    };
    
    $scope.quote2 = {
        message : "I recommend this photo booth to every occasion. Ian was so accommodating and very professional. All my guests were having fun and really enjoyed the unlimited shots. Thanks again and until next time.",
        name : "Neth Lazatin"
    };
	
	$timeout(function() {
		loaded();
	}, 3000);
    
    
});

USPApp.controller('aboutController', function($scope) {
    
});

USPApp.controller('contactController', function($scope, $timeout) {
    $scope.message = 'Contact';
	
	$timeout(function() {
		loaded();
	}, 3000);

});

USPApp.controller('photoboothController', function($scope) {
    $scope.photobooth = [
        "Unlimited Shots (Premium lens)",
        "Unlimited Prints (Professional Quality 4x6)",
        "Customized layouts/design templates",
        "Free use of fun props",
        "Choice of colored backdrop",
        "CD of all images taken by the Photobooth",
        "Full-time photobooth attendant",
    ]
    
});

USPApp.controller('weddingController', function($scope) {
    $scope.wedding = [
        "Unlimited Shots (Premium lens)",
        "Unlimited Prints (Professional Quality 4x6)",
        "Customized layouts/design templates",
        "Free use of fun props",
        "Choice of colored backdrop",
        "CD of all images taken by the Photobooth",
        "Full-time photobooth attendant",
    ]

});

USPApp.controller('soundController', function($scope) {
    $scope.sound = [
        "Unlimited Shots (Premium lens)",
        "Unlimited Prints (Professional Quality 4x6)",
        "Customized layouts/design templates",
        "Free use of fun props",
        "Choice of colored backdrop",
        "CD of all images taken by the Photobooth",
        "Full-time photobooth attendant",
    ]
    
});
