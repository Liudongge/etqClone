angular.module('shoeApp', ['ui.router', 'ngAnimate'])
.config(function($stateProvider, $urlRouterProvider) {


$stateProvider
  .state('collection', {
    url:'/',
    controller: 'collectionCtrl',
    templateUrl: '../views/collection.html'

  })

  .state('shop', {
    url:'/shop/:id',
    controller: 'shopCtrl',
    templateUrl: '../views/shop.html'

  })

  .state('checkout', {
    url:'/checkout',
    controller: 'checkoutCtrl',
    templateUrl: '../views/checkout.html'

  })


  $urlRouterProvider
    .otherwise('/')

})
