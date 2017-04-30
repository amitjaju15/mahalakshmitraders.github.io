
var mltApp = angular.module('mlTradersApp', ['ui.router']);

mltApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');


	$stateProvider
    .state ('Welcome', {
        url:'/',
        templateUrl:'/main.html'
    })
    .state('About Us', {
        url: '/aboutus',  //eventList
        templateUrl:'/aboutUs.html' // createEvent.html
    })
    .state('Contact Us', {
        url: '/contactus',  //eventList
        templateUrl:'/contactUs.html' // createEvent.html
    })
    .state('Privacy', {
        url: '/privacy',  //eventList
        templateUrl:'/privacy.html' // createEvent.html
    })
    .state('Partners', {
        url: '/partners',  //eventList
        templateUrl:'/partners.html' // createEvent.html
    })

})

mltApp.controller('GenericController', ['$scope', '$rootScope', '$window', function ($scope, $rootScope, $window) {

    $window.scrollTo(0,0);
    
}]);