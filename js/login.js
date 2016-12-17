/*global $,document,console,angular,localStorage*/
/*jslint for:true*/
/*jslint browser: true*/

var apiRoot = "https://localhost:50001/bigbasket/api/";

var app = angular.module("loginMain", []);

// Main controller for handeling the Login
app.controller("LoginCtrl", ["fetchAsyncData", "$scope", function(factory, $scope) {
    "use strict";
    $scope.signIn = function(email, password) {
        factory.validateLogin(email, password);
    };
}]);

app.factory("fetchAsyncData", ["$http", function($http) {
    "use strict";

    // Standard methods to call web API of Big Basket
    function validateLogin(email, password) {
        return $http({
            url: apiRoot + "login",
            method: "POST",
            data: {
                email: email,
                password: password
            }
        });
    }
    return {
        validateLogin: validateLogin
    };
}]);