"use strict";

var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('ListController', 
	['$scope', 'GetData', function($scope, GetData) {
		$scope.artists = GetData;
    $scope.artistOrder = 'name';
}]);

artistControllers.controller('DetailsController', 
	['$scope', 'GetData','$routeParams',
	function($scope, GetData, $routeParams) {
		$scope.artists = GetData;
    $scope.whichItem = $routeParams.itemId;
}]);

