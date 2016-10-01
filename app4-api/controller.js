angular.module('apiApp').controller('mainCtrl', function($scope, mainSrvc){

  $scope.users = function(){
    mainSrvc.getData().then(function(response){
      $scope.getData = response.data;
    });
  };
  $scope.users();
});
