'use strict';

angular.module('shoeApp', ['ui.router', 'ngAnimate']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('collection', {
    url: '/',
    controller: 'collectionCtrl',
    templateUrl: '../views/collection.html'

  }).state('shop', {
    url: '/shop/:id',
    controller: 'shopCtrl',
    templateUrl: '../views/shop.html'

  }).state('checkout', {
    url: '/checkout',
    controller: 'checkoutCtrl',
    templateUrl: '../views/checkout.html'

  });

  $urlRouterProvider.otherwise('/');
});

angular.module('shoeApp').controller('checkoutCtrl', function ($scope, shoeSrv) {});

angular.module('shoeApp').controller('collectionCtrl', function ($scope, shoeSrv) {

  $scope.getShoes = function () {
    shoeSrv.getShoes().then(function (res) {
      $scope.shoes = res.data;
      // console.log(res);
    });
  };
  $scope.getShoes();
});

angular.module('shoeApp').controller('mainCtrl', function ($scope, shoeSrv, $rootScope) {

  shoeSrv.getOrders().then(function (res) {
    $rootScope.thebag = res.data;
    if ($rootScope.thebag.length > 0) {
      $rootScope.getTotal();
    } else {
      $rootScope.cartTotal = 0;
    }
    // console.log($rootScope.thebag);
  });

  function getCart() {
    shoeSrv.getCart().then(function (res) {
      // console.log('cart', res)
      if (res.data.length === 0) {
        $rootScope.cartqty = 0;
      } else {
        $rootScope.cartqty = res.data[0].cartquantity;
      }
    });
  }
  getCart();

  $rootScope.getTotal = function () {
    if ($rootScope.thebag.length === 0) {
      return $rootScope.cartTotal = 0;
    }
    var reduce = $rootScope.thebag.slice().reduce(function (prev, curr) {
      return {
        quantity: 1,
        price: prev.quantity * prev.price + curr.quantity * curr.price
      };
    });
    if ($rootScope.thebag.length === 1) {
      return $rootScope.cartTotal = $rootScope.thebag[0].price * $rootScope.thebag[0].quantity;
    }
    $rootScope.cartTotal = reduce.price;
  };

  $scope.removeFromBag = function (index) {

    var shoe = $rootScope.thebag[index];
    $rootScope.cartqty = $rootScope.cartqty - shoe.quantity;
    shoeSrv.setCart($rootScope.cartqty);
    shoeSrv.removeFromOrder(shoe.id, shoe.size);

    if ($rootScope.cartqty === 0) {
      showMain();
    }

    $rootScope.thebag.splice(index, 1);

    $rootScope.getTotal();
    // console.log('Delete:', shoe)
    // console.log('updated bag:', $rootScope.thebag);
  };

  ////////////////////////////////////////////
  //             ANIMATIONS                 //
  ////////////////////////////////////////////
  // function animations(){

  var body = $("body"),
      wrapperOverlay = $(".wrapper-overlay"),
      mainFooter = $(".main-footer"),
      mainWrapper = $(".main-wrapper"),
      navBar = $(".navbar"),
      menuBtn = $(".menu-btn"),
      menuWrapper = $(".menu-wrapper"),
      menu = $(".menu"),
      menuFooter = $(".menu-footer"),
      shopCheckout = $(".shop-checkout"),
      logo = $(".logo"),
      cartBtn = $(".cart-btn"),
      cartWrapper = $(".cart-wrapper"),
      cartScroll = $(".cart-scroll"),
      addToBagBtn = $(".addtobag-btn"),
      checkoutBtn = $('.checkout-button'),
      sizeBtn = $('.size-btn'),
      productSizes = $('.product-sizes');

  ///////////LOGO CLICK///////////
  logo.on('click', function () {
    cartBtn.removeClass("hidediv");
  });

  // ///////////////////////////////////
  // //        MENU TOGGLE           ///
  // ///////////////////////////////////
  //Open Menu
  menuBtn.on('click', function () {
    wrapperOverlay.toggleClass("active");
    mainWrapper.animate({ left: '280px' });
    $(".main-footer").toggleClass("hidefooter");
    menuWrapper.animate({ left: '0px' });
    menu.toggleClass("activemenu");
    navBar.animate({ left: '280px' });
    menuFooter.toggleClass("activefooter");
    body.toggleClass("no-scroll");
    $(".shop-checkout").toggleClass("hidefooter");
  });

  //Close Menu
  function showMain() {
    wrapperOverlay.removeClass("active");
    mainWrapper.animate({ left: '0px' });
    $(".main-footer").removeClass("hidefooter");
    menuWrapper.animate({ left: '-280px' });
    menu.removeClass("activemenu");
    navBar.animate({ left: '0px' });
    menuFooter.removeClass("activefooter");
    body.removeClass("no-scroll");
    $(".shop-checkout").removeClass("hidefooter");
    cartScroll.removeClass("activecart");
    cartWrapper.animate({ right: '-280px' });
    cartBtn.removeClass("hidediv");
  };

  $(".wrapper-overlay, .menu").on('click', function () {
    showMain();
  });

  // ///////////////////////////////////
  // //        CART TOGGLE           ///
  // ///////////////////////////////////

  // function slideCart(){
  $(".cart-btn").on('click', function () {
    wrapperOverlay.toggleClass("active");
    mainWrapper.animate({ left: '-280px' });
    $(".main-footer").toggleClass("hidefooter");
    navBar.animate({ left: '-280px' });
    $(".shop-checkout").toggleClass("hidefooter");
    body.toggleClass("no-scroll");
    cartWrapper.animate({ right: '0px' });
    cartScroll.toggleClass("activecart");
    cartBtn.toggleClass("hidediv");
  });

  $scope.addtobageAnimate = function () {
    wrapperOverlay.toggleClass("active");
    mainWrapper.animate({ left: '-280px' });
    $(".main-footer").toggleClass("hidefooter");
    navBar.animate({ left: '-280px' });
    $(".shop-checkout").toggleClass("hidefooter");
    body.toggleClass("no-scroll");
    cartWrapper.animate({ right: '0px' });
    cartScroll.toggleClass("activecart");
    cartBtn.toggleClass("hidediv");
  };

  $scope.checkoutButton = function () {
    wrapperOverlay.removeClass("active");
    mainWrapper.animate({ left: '0px' });
    $(".main-footer").removeClass("hidefooter");
    menuWrapper.animate({ left: '-280px' });
    menu.removeClass("activemenu");
    navBar.animate({ left: '0px' });
    menuFooter.removeClass("activefooter");
    body.removeClass("no-scroll");
    $(".shop-checkout").removeClass("hidefooter");
    cartScroll.removeClass("activecart");
    cartWrapper.animate({ right: '-280px' });
  };

  $scope.sizeBtnUp = function () {
    $('.product-sizes').toggleClass("active");
  };

  $scope.sizeBtnDown = function () {
    $('.product-sizes').removeClass("active");
    $('addtobag-btn').addClass('active');
  };

  //   //////FILTER TOGGLE///////
  //   $(".filter-btn").click(function() {
  //
  //   });
  //
  //
  //   $(".filter-x").click(function() {
  //
  //   });
  //
  //
  //   $(".filter-apply").click(function() {
  //
  //   });
});

angular.module('shoeApp').controller('shopCtrl', function ($scope, shoeSrv, $state, $rootScope) {

  $scope.shoeId = $state.params.id;

  $scope.getShoes = function () {
    shoeSrv.getShoes().then(function (res) {
      $scope.shoe = res.data[$state.params.id - 1];

      $('.owl-carousel').owlCarousel({
        items: 1,
        stagePadding: 30,
        smartSpeed: 450
      });
    });
  };
  $scope.getShoes();

  $scope.getSizes = function () {
    $scope.sizeBtnUp();
  };
  $scope.size = 'SIZE';

  $scope.changeSize = function (size) {
    $scope.size = size;
    $scope.sizeBtnDown();
    $scope.addtobaglight = { "color": "white" };
    $scope.addtobag = function (shoe, callback) {
      $scope.addtobaglight = { "color": "rgba(255, 255, 255, 0.5)" };
      shoe.size = $scope.size;
      $scope.addtobageAnimate();
      $rootScope.cartqty++;
      shoeSrv.setCart($rootScope.cartqty);
      shoeSrv.addOrder(shoe.id, shoe.size);

      function isInBag(shoeid, shoesize) {
        var flag = -1;
        $rootScope.thebag.forEach(function (shoe, index) {
          if (shoe.id === shoeid && shoe.size === shoesize) {
            flag = index;
          }
        });
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
        });
      } else {
        $rootScope.thebag[isInBag(shoe.id, shoe.size)].quantity++;
      }
      $rootScope.getTotal();

      callback = function callback() {
        $scope.size = 'SIZE';
        $scope.addtobag = null;
      };

      callback();
      // console.log($rootScope.thebag);
    };
  };
});

angular.module('shoeApp').service('shoeSrv', function ($http) {

  this.getShoes = function () {
    return $http({
      method: 'GET',
      url: '/api/shoes'
    });
  };

  this.getCart = function () {
    return $http({
      method: 'GET',
      url: '/api/cart'
    }).then(function (res) {
      // console.log('db',res);
      return res;
    });
  };

  this.setCart = function (quantity) {
    return $http({
      method: 'POST',
      url: '/api/cart',
      data: {
        cartqty: quantity
      }
    });
  };

  this.addOrder = function (shoeid, size) {
    return $http({
      method: 'POST',
      url: '/api/order',
      data: {
        shoeid: shoeid,
        size: size
      }
    });
  };

  this.removeFromOrder = function (shoeid, size) {
    return $http({
      method: 'POST',
      url: '/api/remove',
      data: {
        shoeid: shoeid,
        size: size
      }
    });
  };

  this.getOrders = function () {
    return $http({
      method: 'GET',
      url: '/api/order'
    });
  };
});