/**
 * Created by Administrator on 2017/9/28.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService',function ($scope,$stateParams,localStorageService) {
    $scope.title=$stateParams.title;
    $scope.property=$stateParams.property;
    $scope.shop=localStorageService.get('Shop',{
      name:'李帆',
      ab:'',
      phone:'18650715138',
      createTime:'2017-9-27 17:14:00',
      email:'18650715138@163.com',
      boss:'李帆',
      shopPhone:'18650715138'
    });
    $scope.save=function () {
      localStorageService.update('Shop',$scope.shop);
    };
  }]);
})();
