'use strict';

angular.module('app.services.stripe', [])
  .service('stripeService', function stripeService($http) {
    this.sendPayment = function(token, user){
      return $http({
        method: "POST", 
        url: "http://localhost:8888/stripecheckout", 
        data: {stripeToken: token, user: user } 
      }).then(function(res){
        console.log(res)
        return res.data;
      });
    };
  });
