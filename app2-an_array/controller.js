angular.module('arrayApp').controller('arrayController', function($scope, mainSrvc){

  $scope.users = mainSrvc.users();
  

});
