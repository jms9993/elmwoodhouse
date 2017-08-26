// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var elmwoodApp = angular.module('elmwoodApp', ['ngRoute']);

    // configure our routes
    elmwoodApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'contact.html',
                controller  : 'contactController'
            })
            .when('/home', {
                templateUrl : 'home.html',
                controller  : 'mainController'
            })            
            .when('/policies', {
                templateUrl : 'policies.html',
                controller  : 'policiesController'
            })
             // route for the onyx page
            .when('/onyx', {
                templateUrl : 'onyx.html',
                controller  : 'onyxController'
            })
            .when('/harding', {
                templateUrl : 'harding.html',
                controller  : 'hardingController'
            })           
            .when('/sweet', {
                templateUrl : 'sweet.html',
                controller  : 'sweetController'
            })
            .when('/magnetic', {
                templateUrl : 'magnetic.html',
                controller  : 'magneticController'
            });

    });

    elmwoodApp.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        $location.hash($routeParams.scrollTo);
        $anchorScroll();  
      });
    });

    // create the controller and inject Angular's $scope
    elmwoodApp.controller('mainController', ['$window', function($scope, $window) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
   
         $scope.startDate='05-02-2016';
    }]);

    elmwoodApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    elmwoodApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    elmwoodApp.controller('policiesController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    elmwoodApp.controller('onyxController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    elmwoodApp.controller('hardingController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    elmwoodApp.controller('sweetController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    elmwoodApp.controller('magneticController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });