'use strict';
angular.module('starter.services', [])

/**
 * @memberof main
 * @ngdoc service
 * @name HomeServ
 * @param ENV {constant} module scope
 * @param $http to make request to api
 */
.service('HomeServ', function( ENV, $http) {

  /**
   * Get all the companies in the config file
   * @memberof HomeServ
   * @function getCompanies
   * @returns company list
   */
this.getCompanies = function(){
  //console.log(this.get('http://nirajdedhia.freevar.com/jobs.php?method=getNirajCcf') );
  return ENV.COMPANIES;
};

  /**
   * Http get request 
   * @memberof HomeServ
   * @function get
   * @returns response
   */
this.get = function (url) {

    return $http.get(url).then(function(response){
      console.log(response);
      //return response;
    },function(error) {
      console.log(error);
    });
  };

});



