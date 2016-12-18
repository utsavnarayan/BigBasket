/*global $,document,console,angular,localStorage*/
/*jslint for:true*/
/*jslint browser: true*/

// TODO: User https endpoint of the API after API is live on production
var apiRoot = "http://localhost:8000/";

var app = angular.module("loginMain", []);

// Main controller for handeling the Login
app.controller("LoginCtrl", ["fetchAsyncData", "$scope", function(factory, $scope) {
    "use strict";

    // Get authentication token and store it in local storage
    $scope.signIn = function(email, password) {
        factory.validateLogin(email, password).then(function(response){
            if (response.status == 200) {
 	        localStorage.setItem("authToken",response.data.token);
	        window.location.href = "index.html";
	    }
	});

    };
}]);

app.factory("fetchAsyncData", ["$http", function($http) {
    "use strict";

    // Standard methods to call web API of Big Basket
    function validateLogin(email, password) {
        return $http({
            url: apiRoot + "login/",
            method: "POST",
            data: {
                username: email,
                password: password
            }
        });
    }
    return {
        validateLogin: validateLogin
    };
}]);
