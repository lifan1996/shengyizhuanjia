/**
 * Created by Administrator on 2017/9/27.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'李帆',
        ab:'',
        phone:'18650715138',
        createTime:'2017-9-27 17:14:00',
        email:'18650715138@163.com',
        boss:'李帆',
        shopPhone:'18650715138'
      });
    });
  }])
})();
