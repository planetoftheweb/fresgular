"use strict";

var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', 
	['$scope', '$firebaseArray',
	function($scope, $firebaseArray) {
		var ref = new Firebase('https://artists.firebaseio.com');
		$scope.artists = $firebaseArray(ref);
    $scope.artistOrder = 'name';
}]);

artistControllers.controller('DetailsController', 
	['$scope', '$firebaseArray','$routeParams',
	function($scope, $firebaseArray, $routeParams) {
		var ref = new Firebase('https://artists.firebaseio.com');
		$scope.artists = $firebaseArray(ref);
    $scope.whichItem = $routeParams.itemId;
}]);

