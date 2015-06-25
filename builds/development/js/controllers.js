"use strict";

var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('ListController',
	['$scope', 'GetData', 'FIREBASE_URL',
	function($scope, GetData, FIREBASE_URL) {
		$scope.artists = GetData;
    $scope.artistOrder = 'name';
		var ref = new Firebase(FIREBASE_URL);
		$scope.showsearch = true;
		$scope.showadd = false; 

		$scope.onAdd = function() {
			var imageReader = new FileReader();
      imageReader.addEventListener('load', function(e){
        $scope.user.image = e.target.result;
        ref.push($scope.user);
      });
      imageReader.readAsDataURL(document.forms.adder.imageupload.files[0]);
      $scope.query = $scope.user.name;
		};

		$scope.deleteItem = function(deleteID) {
			var deleteRef = new Firebase(FIREBASE_URL + deleteID);
			deleteRef.remove();
		};
}]);

artistControllers.controller('DetailsController',
	['$scope', 'GetData','$routeParams',
	function($scope, GetData, $routeParams) {
		$scope.artists = GetData;
    $scope.whichItem = $routeParams.itemId;
}]);
