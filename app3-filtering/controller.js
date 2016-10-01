angular.module('filterApp').controller('mainCtrl', function($scope, mainSrvc){

  $scope.sortProp = '';
  $scope.sortDirection = true;
  $scope.getData = mainSrvc.getData();

});
