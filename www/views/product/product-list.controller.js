/**
 * Created by Administrator on 2017/10/10.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ProductListCtrl',['$scope','$ionicLoading','$timeout','$filter',function ($scope,$ionicLoading,$timeout,$filter) {
      $scope.products=[];
      $scope.sourceProducts=[];
      $scope.searchMV={
        content:''
      };
      var isLoading=false;
      var pageIndex=1;
      $scope.$on('$ionicView.enter',function () {
        $ionicLoading.show({
          template:'<ion-spinner icon="ios" class="spinner-light"></ion-spinner>数据加载中，请稍候......'
        });
        $scope.doRefresh();
      });
      $scope.getByName=function () {
        $scope.products=$filter('filter')($scope.sourceProducts,{
          Name:$scope.searchMV.content
        });
      };
      $scope.doRefresh=function () {
        pageIndex=1;
        $scope.hasMore=false;
        $scope.products=[];
        loadData();
      };
      $scope.loadMore=function () {
        pageIndex++;
        loadData();
      };
      function loadData() {
        if(isLoading==true){
          return;
        }
        isLoading=true;
        $timeout(function () {

          var list=[
            {
              ID:1
              ,Images:['/views/product/img/1.jpg']
              ,Name:'iphone7'
              ,Price:'5388'
              ,Store:12
              ,Barcode:'12121212112'
            }
            ,{
              ID:2
              ,Images:['/views/product/img/2.jpg']
              ,Name:'node7'
              ,Price:'5388'
              ,Store:120
              ,Barcode:'12121212112'
            }
            ,{
              ID:3
              ,Images:['/views/product/img/3.jpg']
              ,Name:'小米5 plus'
              ,Price:'1999'
              ,Store:12
              ,Barcode:'12121212112'
            }
            ,{
              ID:4
              ,Images:[]
              ,Name:'iPhone7 plus'
              ,Price:'6388'
              ,Store:12
              ,Barcode:'12121212112'
            }
            ,{
              ID:5
              ,Images:[]
              ,Name:'华为 P9'
              ,Price:'3388'
              ,Store:19
              ,Barcode:'12121212112'
            }
            ,{
              ID:6
              ,Images:[]
              ,Name:'小米5'
              ,Price:'1599'
              ,Store:9
              ,Barcode:'12121212112'
            }
          ];
          $scope.products=list;
          isLoading=false;
          $scope.$broadcast('scroll.refreshComplete');
          $ionicLoading.hide();
        },2000);
      }
    }]);
})();
