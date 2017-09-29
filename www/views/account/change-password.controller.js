/**
 * Created by Administrator on 2017/9/28.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('ChangePasswordCtrl',['$scope','localStorageService',function ($scope,localStorageService) {
    $scope.user={
      oldPassword:'',
      password:'',
      confirmPassword:'',
    };
    $scope.save1=function () {
      localStorageService.update('User',$scope.user);
    };
  }]);
})();
