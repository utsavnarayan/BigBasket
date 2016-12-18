/*global $,document,console,angular,localStorage*/
/*jslint for:true*/
/*jslint browser: true*/


// TODO: User https endpoint of the API after API is live on production
var apiRoot = "http://localhost:8000/";

var app = angular.module("dashboardHome", []);

// Main controller for handeling the dashboard
app.controller("HomeCtrl", ["fetchAsyncData", "$scope", function(factory, $scope) {
    "use strict";
    $scope.inventory = [];
    $scope.cart = [];

    // Get items from the DB using REST API call
    factory.getItems().success(function(results){
	angular.forEach(results.results, function(value, key) {
	    var inventoryItem = {};
	    inventoryItem.details = value;
            inventoryItem.selectedQuantity = 1;
	    $scope.inventory.push(inventoryItem);
	});
    });

    // Get user's cart
    factory.getCart().success(function(results){
	angular.forEach(results.results, function(value, key) {
	    $scope.cart.push(value);
	});
	console.log($scope.cart);
    });

    // Store items in cart
    $scope.cart = [];
    $scope.addToCart = function(item) {
        $scope.cart.push(item);
        // TODO: Remove hardcoding and get user's context
        factory.saveCart($scope.cart);
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
    var authToken = localStorage.getItem("authToken");
    var headers = {"Authorization": "Token " + authToken};

    function getItems() {
        return $http({
            url: apiRoot + "items/",
            method: "GET",
	    headers: headers	 
        });
    }

    function saveCart(cart) {
        return $http({
            url: apiRoot + "carts/",
            method: "POST",
	    headers: headers,
            data: {
                email: email,
                cart: cart
            }
        });
    }

    function getCart() {
        return $http({
            url: apiRoot + "carts/",
            method: "GET",
	    headers: headers,
        });
    }
    return {
        getItems: getItems,
        saveCart: saveCart,
        getCart: getCart
    };
}]);
