"use strict";

var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', 
	['$scope', '$firebaseArray', 'FIREBASE_URL', 
	function($scope, $firebaseArray, FIREBASE_URL) {
		var ref = new Firebase(FIREBASE_URL);
		$scope.artists = $firebaseArray(ref);
    $scope.artistOrder = 'name';
}]);

artistControllers.controller('DetailsController', 
	['$scope', '$firebaseArray','$routeParams', 'FIREBASE_URL',
	function($scope, $firebaseArray, $routeParams, FIREBASE_URL) {
		var ref = new Firebase(FIREBASE_URL);
		$scope.artists = $firebaseArray(ref);
    $scope.whichItem = $routeParams.itemId;
}]);

