angular.module('shoeApp')
.controller('shopCtrl', function($scope, shoeSrv, $state, $rootScope){

  $scope.shoeId = $state.params.id;

  $scope.getShoes = function(){
    shoeSrv.getShoes().then(function(res){
      $scope.shoe = res.data[$state.params.id - 1];

      $('.owl-carousel').owlCarousel({
        items:1,
        stagePadding:30,
        smartSpeed:450
      });

    })
  }
  $scope.getShoes();


  $scope.getSizes = function() {
    $scope.sizeBtnUp();
  }
  $scope.size = 'SIZE';

  $scope.changeSize = function(size){
    $scope.size = size;
    $scope.sizeBtnDown();
    $scope.addtobaglight = {"color":"white"}
    $scope.addtobag = function(shoe, callback) {
      $scope.addtobaglight = {"color":"rgba(255, 255, 255, 0.5)"}
      shoe.size = $scope.size;
      $scope.addtobageAnimate();
      $rootScope.cartqty++;
      shoeSrv.setCart($rootScope.cartqty)
      shoeSrv.addOrder(shoe.id, shoe.size)

      function isInBag(shoeid, shoesize){
        var flag = -1;
        $rootScope.thebag.forEach(function(shoe, index){
          if (shoe.id===shoeid && shoe.size===shoesize) {
            flag = index;
          }
        })
        return flag;
      }

      if (isInBag(shoe.id, shoe.size) === -1) {
        $rootScope.thebag.push({
          name: shoe.name,
          id: shoe.id,
          img1: shoe.img1,
          price: shoe.price,
          quantity: 1,
          size: shoe.size
        })
      } else {
        $rootScope.thebag[isInBag(shoe.id, shoe.size)].quantity++
      }
      $rootScope.getTotal();

      callback = function(){
        $scope.size = 'SIZE';
        $scope.addtobag = null;
      }

      callback();
      // console.log($rootScope.thebag);
    }
  }
})
