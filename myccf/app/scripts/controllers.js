'use strict';

angular.module('starter.controllers', [])

/**
 * @memberof main
 * @ngdoc controller
 * @name HomeCtrl
 * @param $scope {service} controller scope
 * @param $state {service} controller scope
 * @param $rootScope {service} module scope
 * @param ENV {constant} module scope
 * @param HomeServ {service} service used in this controller
 */
.controller('HomeCtrl', function($scope, $state, $rootScope, ENV, HomeServ) {

  /**
   * Initialize function.
   * @return {[type]} [description]
   */
  $scope.initialize = function(){
    var comp = HomeServ.getCompanies();

    comp.sort(function(a, b) {
        return a.boothNo - b.boothNo;
        });
    $scope.companies = comp;

  };

  /**
   * Redirect to the company detail Page
   * @memberof HomeCtrl
   * @function goToDetail
   * @returns None
   */
  $scope.goToDetail = function(company){
    $rootScope.company = company;
    $state.go('companyDetail');
  };

  /**
   * Redirect to the visited company Page
   * @memberof HomeCtrl
   * @function goToVisited
   * @returns None
   */
  $scope.goToVisited = function(){
    $state.go('visited');
  };

  // This will get call first for home controller
  $scope.initialize();

})

/**
 * @memberof main
 * @ngdoc controller
 * @name DetailCtrl
 * @param $scope {service} controller scope
 * @param $state {service} controller scope
 * @param $rootScope {service} module scope
 */
.controller('DetailCtrl', function($scope, $state, $rootScope) {

  /**
   * Initialize function.
   * @return {[type]} [description]
   */
  $scope.initialize = function(){
    $scope.company = $rootScope.company;
  };

  /**
   * Mark the company is visited and redirects to home
   * @memberof DetailCtrl
   * @function markVisited
   * @returns None
   */
  $scope.markVisited = function(company){
    company.visited = !company.visited;
    $state.go('home');
  };

  // This will get call first for home controller
  $scope.initialize();

})

/**
 * @memberof main
 * @ngdoc controller
 * @name HomeCtrl
 * @param $scope {service} controller scope
 * @param $state {service} controller scope
 * @param $rootScope {service} module scope
 * @param ENV {constant} module scope
 */
.controller('VisitedCtrl', function($scope, $state, $rootScope, ENV) {

  /**
   * Initialize function.
   * @return {[type]} [description]
   */
  $scope.initialize = function(){
    var comp = ENV.COMPANIES;
    comp.sort(function(a, b) {
      return a.boothNo - b.boothNo;
    });
    $scope.companies = comp;
  };

  /**
   * Redirects to company visited page
   * @memberof VisitedCtrl
   * @function goToDetail
   * @returns None
   */
  $scope.goToDetail = function(company){
    $rootScope.company = company;
    $state.go('companyDetail');
  };

  /**
   * Redirects to home
   * @memberof VisitedCtrl
   * @function goToHome
   * @returns None
   */
  $scope.goToHome = function(){
    $state.go('home');
  };

  // This will get call first for home controller
  $scope.initialize();

});

