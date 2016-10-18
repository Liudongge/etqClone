angular.module('shoeApp')
.service('shoeSrv', function($http){


  this.getShoes = function(){
    return $http({
      method: 'GET',
      url: '/api/shoes'
    })
  }

  this.getCart = function(){
    return $http({
      method: 'GET',
      url: '/api/cart'
    }).then(function(res){
      // console.log('db',res);
      return res;
    })
  }

  this.setCart = function(quantity){
    return $http({
      method: 'POST',
      url: '/api/cart',
      data: {
        cartqty: quantity
      }
    })
  }

  this.addOrder = function(shoeid, size) {
    return $http({
      method: 'POST',
      url: '/api/order',
      data: {
        shoeid: shoeid,
        size: size
      }
    })
  }

  this.removeFromOrder = function(shoeid, size) {
    return $http({
      method: 'POST',
      url: '/api/remove',
      data: {
        shoeid: shoeid,
        size: size
      }
    })
  }

  this.getOrders = function(){
    return $http({
      method: 'GET',
      url: '/api/order',
    })
  }


})
