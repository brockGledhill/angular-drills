angular.module('apiApp').service('mainSrvc', function($http){

this.getData = function(){
  return $http({
    method: 'GET',
    url: 'http://smurfs.devmounta.in/smurfs/'
  });
};

});
