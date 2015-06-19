"use strict";

var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers',
  'firebase'
]).constant('FIREBASE_URL', 'https://artists.firebaseio.com/');

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);

myApp.factory('GetData', function($firebaseArray,
   FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
  return $firebaseArray(ref);
}); //CountMeetings
