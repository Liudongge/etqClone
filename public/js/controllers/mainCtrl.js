angular.module('shoeApp')
.controller('mainCtrl', function($scope, shoeSrv, $rootScope){

  shoeSrv.getOrders().then(function(res){
    $rootScope.thebag = res.data
    if ($rootScope.thebag.length > 0){
      $rootScope.getTotal();
    } else {
      $rootScope.cartTotal = 0;
    }
    // console.log($rootScope.thebag);
  })


  function getCart() {
    shoeSrv.getCart().then(function(res){
      // console.log('cart', res)
      if (res.data.length === 0) {
        $rootScope.cartqty = 0;
      } else {
        $rootScope.cartqty = res.data[0].cartquantity;
      }
    })
  }
  getCart();


  $rootScope.getTotal = function(){
    if ($rootScope.thebag.length === 0){
      return $rootScope.cartTotal = 0;
    }
     var reduce = $rootScope.thebag.slice().reduce(function(prev,curr){
      return {
        quantity: 1,
        price: (prev.quantity* prev.price) + (curr.quantity * curr.price)
      }
    })
    if ($rootScope.thebag.length === 1){
      return $rootScope.cartTotal = $rootScope.thebag[0].price * $rootScope.thebag[0].quantity;
    }
    $rootScope.cartTotal = reduce.price;
  }


  $scope.removeFromBag = function(index){

    var shoe = $rootScope.thebag[index]
    $rootScope.cartqty = $rootScope.cartqty - shoe.quantity;
    shoeSrv.setCart($rootScope.cartqty)
    shoeSrv.removeFromOrder(shoe.id, shoe.size)

    if ($rootScope.cartqty === 0) {
      showMain();
    }

    $rootScope.thebag.splice(index, 1)

    $rootScope.getTotal();
    // console.log('Delete:', shoe)
    // console.log('updated bag:', $rootScope.thebag);
  }



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
    logo.on('click', function() {
      cartBtn.removeClass("hidediv");
    })

  // ///////////////////////////////////
  // //        MENU TOGGLE           ///
  // ///////////////////////////////////
    //Open Menu
    menuBtn.on('click', function(){
      wrapperOverlay.toggleClass("active");
      mainWrapper.animate({left: '280px'});
      $(".main-footer").toggleClass("hidefooter");
      menuWrapper.animate({left: '0px'});
      menu.toggleClass("activemenu");
      navBar.animate({left: '280px'});
      menuFooter.toggleClass("activefooter");
      body.toggleClass("no-scroll");
      $(".shop-checkout").toggleClass("hidefooter");
    });

    //Close Menu
    function showMain() {
      wrapperOverlay.removeClass("active");
      mainWrapper.animate({left: '0px'});
      $(".main-footer").removeClass("hidefooter");
      menuWrapper.animate({left: '-280px'});
      menu.removeClass("activemenu");
      navBar.animate({left: '0px'});
      menuFooter.removeClass("activefooter");
      body.removeClass("no-scroll");
      $(".shop-checkout").removeClass("hidefooter");
      cartScroll.removeClass("activecart");
      cartWrapper.animate({right: '-280px'});
      cartBtn.removeClass("hidediv");
    };

    $(".wrapper-overlay, .menu").on('click', function(){
      showMain();
    });

  // ///////////////////////////////////
  // //        CART TOGGLE           ///
  // ///////////////////////////////////

  // function slideCart(){
    $(".cart-btn").on('click', function(){
      wrapperOverlay.toggleClass("active");
      mainWrapper.animate({left: '-280px'});
      $(".main-footer").toggleClass("hidefooter");
      navBar.animate({left: '-280px'});
      $(".shop-checkout").toggleClass("hidefooter");
      body.toggleClass("no-scroll");
      cartWrapper.animate({right: '0px'});
      cartScroll.toggleClass("activecart");
      cartBtn.toggleClass("hidediv");
    });

    $scope.addtobageAnimate = function() {
      wrapperOverlay.toggleClass("active");
      mainWrapper.animate({left: '-280px'});
      $(".main-footer").toggleClass("hidefooter");
      navBar.animate({left: '-280px'});
      $(".shop-checkout").toggleClass("hidefooter");
      body.toggleClass("no-scroll");
      cartWrapper.animate({right: '0px'});
      cartScroll.toggleClass("activecart");
      cartBtn.toggleClass("hidediv");
    };

    $scope.checkoutButton = function(){
      wrapperOverlay.removeClass("active");
      mainWrapper.animate({left: '0px'});
      $(".main-footer").removeClass("hidefooter");
      menuWrapper.animate({left: '-280px'});
      menu.removeClass("activemenu");
      navBar.animate({left: '0px'});
      menuFooter.removeClass("activefooter");
      body.removeClass("no-scroll");
      $(".shop-checkout").removeClass("hidefooter");
      cartScroll.removeClass("activecart");
      cartWrapper.animate({right: '-280px'});
    };

    $scope.sizeBtnUp = function(){
      $('.product-sizes').toggleClass("active");
    }

    $scope.sizeBtnDown = function() {
      $('.product-sizes').removeClass("active");
      $('addtobag-btn').addClass('active');
    }



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

})
