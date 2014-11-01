'use strict';

angular.module('app.controllers.stripe', [])
.controller('StripeCtrl', function ($scope, stripeService) {
  $scope.stripeCallback = function (code, result) { 
    $scope.err = '';
    $scope.success = '';
    
    if (result.error) { 
      $scope.error = result.error.message; 
    } else { 
      stripeService.sendPayment(result.id, $scope.user).then(function(res){
        console.log(res);
        if(res.code){
          $scope.err = res.message;
        } else {
          $scope.number = '';
          $scope.expiry = '';
          $scope.cvc = '';
          var getAmount = function(){
            var num = res.amount / 100;
            var p = num.toFixed(2).split(".");
            return "$" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
              return  num + (i && !(i % 3) ? "," : "") + acc;
            }, "") + "." + p[1]; 
          }

          $scope.success = res.card.brand + ':' + res.card.last4 + ' was charged ' + getAmount();
        }
      });
    };
  }
});
