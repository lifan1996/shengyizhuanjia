/**
 * Created by Administrator on 2017/9/28.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('SettingCtrl',['$scope','$ionicHistory','$state','localStorageService',function ($scope,$ionicHistory,$state,localStorageService) {
    $scope.goBack=function () {
      $ionicHistory.nextViewOptions({
        disableBack:true
      });
      $state.go('app.home')
    };
    $scope.shop={
      shopPhone:'18650715138'
    };
    $scope.callPhone=function () {
      location.href='tel:'+$scope.shop.shopPhone;
    }
  }]);
})();
