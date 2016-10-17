angular.module('shoeApp')
.controller('collectionCtrl', function($scope, shoeSrv){

  $scope.getShoes = function(){
    shoeSrv.getShoes().then(function(res){
      $scope.shoes = res.data;
      // console.log(res);
    })
  }
  $scope.getShoes();

})
