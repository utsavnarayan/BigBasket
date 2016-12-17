/*global $,document,console,angular,localStorage*/
/*jslint for:true*/
/*jslint browser: true*/

var apiRoot = "https://localhost:50001/bigbasket/api/";

var app = angular.module("dashboardHome", []);

// Main controller for handeling the dashboard
app.controller("HomeCtrl", ["fetchAsyncData", "$scope", function(factory, $scope) {
    "use strict";
    $scope.inventory = [
        { id: 1, selectedQuantity: 1, name: "Soap", quantity: 25, price: 30, imgURL: "http://cdn-jpg.allyou.com/sites/default/files/image/2014/01/300x300/i/2011/02/maggi-onion-soup-m.jpg" },
        { id: 2, selectedQuantity: 1, name: "Coffee", quantity: 10, price: 100, imgURL: "http://cdn-jpg.allyou.com/sites/default/files/image/2014/01/300x300/i/2011/02/maggi-onion-soup-m.jpg" },
        { id: 3, selectedQuantity: 1, name: "Maggi", quantity: 2, price: 10, imgURL: "http://cdn-jpg.allyou.com/sites/default/files/image/2014/01/300x300/i/2011/02/maggi-onion-soup-m.jpg" },
        { id: 4, selectedQuantity: 1, name: "Surf", quantity: 15, price: 80, imgURL: "http://cdn-jpg.allyou.com/sites/default/files/image/2014/01/300x300/i/2011/02/maggi-onion-soup-m.jpg" },
        { id: 5, selectedQuantity: 1, name: "Shampoo", quantity: 30, price: 150, imgURL: "http://cdn-jpg.allyou.com/sites/default/files/image/2014/01/300x300/i/2011/02/maggi-onion-soup-m.jpg" },
        { id: 6, selectedQuantity: 1, name: "Haldiram", quantity: 30, price: 150, imgURL: "http://cdn-jpg.allyou.com/sites/default/files/image/2014/01/300x300/i/2011/02/maggi-onion-soup-m.jpg" },
        { id: 7, selectedQuantity: 1, name: "Facewash", quantity: 30, price: 150, imgURL: "http://cdn-jpg.allyou.com/sites/default/files/image/2014/01/300x300/i/2011/02/maggi-onion-soup-m.jpg" },
    ];

    // Store items in cart
    $scope.cart = [];
    $scope.addToCart = function(item) {
        $scope.cart.push(item);
        // TODO: Remove hardcoding and get user's context
        factory.saveCart("utsavinbox@gmail.com", $scope.cart);
    };

}]).directive('allItems', function() {
    return {
        templateUrl: 'inventory.html'
    };
}).directive('myCart', function() {
    return {
        templateUrl: 'cart.html'
    };
}).directive('myOrder', function() {
    return {
        templateUrl: 'order.html'
    };
});

// Factory methods for querying BigBasket's REST API
app.factory("fetchAsyncData", ["$http", function($http) {
    "use strict";

    function getItems() {
        return $http({
            url: apiRoot + "items",
            method: "GET"
        });
    }

    function saveCart(email, cart) {
        return $http({
            url: apiRoot + "cart",
            method: "POST",
            data: {
                email: email,
                cart: cart
            }
        });
    }

    function getCart(userID) {
        return $http({
            url: apiRoot + "cart/" + userID,
            method: "GET"
        });
    }
    return {
        getItems: getItems,
        saveCart: saveCart,
        getCart: getCart
    };
}]);