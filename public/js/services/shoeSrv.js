angular.module('shoeApp')
.service('shoeSrv', function($http){


  this.getShoes = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:9001/api/shoes'
    })
  }

  this.getCart = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:9001/api/cart'
    }).then(function(res){
      // console.log('db',res);
      return res;
    })
  }

  this.setCart = function(quantity){
    return $http({
      method: 'POST',
      url: 'http://localhost:9001/api/cart',
      data: {
        cartqty: quantity
      }
    })
  }

  this.addOrder = function(shoeid, size) {
    return $http({
      method: 'POST',
      url: 'http://localhost:9001/api/order',
      data: {
        shoeid: shoeid,
        size: size
      }
    })
  }

  this.removeFromOrder = function(shoeid, size) {
    return $http({
      method: 'POST',
      url: 'http://localhost:9001/api/remove',
      data: {
        shoeid: shoeid,
        size: size
      }
    })
  }

  this.getOrders = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:9001/api/order',
    })
  }


})
