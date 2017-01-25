(function() {

  angular
    .module("CLEApp")
    .controller("SearchCtrl", SearchCtrl);

  SearchCtrl.$inject = ["$scope", "$http","$rootScope","$location" ,"$anchorScroll", "$timeout" ,"SearchService" ];

  function SearchCtrl($scope, $http, $rootScope, $location, $anchorScroll, $timeout, SearchService) {
    
      $rootScope.pagetitle = "Search";
      $scope.page = "landing";
      $scope.searchform = {};
      $scope.logdetail = {};
      $scope.noresults =false;
      $scope.logresults={};

      var success = function(result) {
      $scope.noresults =false;
      $rootScope.pagetitle = "Search Results";
      $scope.page = "results";
      $scope.logresults = result.response.docs;
     // alert(logresults);
    //  $scope.goUp();
      };

      var fail = function(result) {
      $scope.noresults =true;
      $scope.goUp();
      };

      $scope.getResults = function(){
        var payload  = {};
        
        var searchdata = $scope.searchform;

        payload.BUSINESSID = searchdata.businessId;
        payload.TRANSACTIONID = searchdata.transactionId;
        payload.STATUS = searchdata.stat;
        payload.APPLICATIONID = searchdata.appId;
        payload.SERVICENAME = searchdata.service;
        payload.HOSTNAME = searchdata.hostname;
        payload.APPLICATIONDOMAIN = searchdata.domain;
        payload.TRANSACTIONTYPE = searchdata.transactiontype;
        payload.LOGCATEGORY = searchdata.logcategory;
        payload.LOGID = searchdata.logId;

        SearchService.getSearchResults(payload, success, fail);
      };
      $scope.goBack = function(){
        $scope.goUp();
        $rootScope.pagetitle = "Search";
        $scope.page = "landing";
      };

      $scope.goUp = function(){
        $timeout(function() {
          $location.hash('page-wrapper');
          $anchorScroll();
        });
      }

      $scope.showDetails = function(log){
        $rootScope.pagetitle = "Edit details";
        $scope.page = "details";
       // $scope.logdetail = log ;
        
        $scope.applicationID=log.APPLICATIONID;
        $scope.COMPONENTNAME=log.COMPONENTNAME;
        $scope.SERVICENAME=log.SERVICENAME;
        $scope.TRANSACTIONID=log.TRANSACTIONID;
        $scope.STATUS=log.STATUS;
        $scope.TRANSACTIONDOMAIN=log.TRANSACTIONDOMAIN;
        $scope.LOGID=log.LOGID;
        $scope.TIMEMARK=log.TIMEMARK;
        $scope.FILTERED=log.FILTERED;
        $scope.HOSTNAME=log.HOSTNAME;
        $scope.TRANSACTIONAFTER=log.TRANSACTIONAFTER;
        
        
        
      }
      
      $scope.saveData = function(){
    	  var payload  = {};
    	  payload.logid = $scope.LOGID
    	  payload.businessId = $scope.applicationID;
          payload.transactionId = $scope.COMPONENTNAME;
          payload.status =  $scope.STATUS;
          payload.applicationId =$scope.applicationID;
          payload.serviceName = $scope.SERVICENAME;
          payload.hostName = $scope.HOSTNAME;
          SearchService.sendDetails(payload, success, fail);
        }
        

      $scope.showResults = function(){
        $rootScope.pagetitle = "Search Results";
        $scope.page = "results";
      }
      
  //     $scope.totalItems = $scope.logresults.length;
  //     $scope.currentPage = 1;
  //     $scope.numPerPage = 3;
    
  //   $scope.paginate = function(value) {
  //     var begin, end, index;
  //     begin = ($scope.currentPage - 1) * $scope.numPerPage;
  //     end = begin + $scope.numPerPage;
  //     index = $scope.logresults.indexOf(value);
  //     return (begin <= index && index < end);
  //   };
   }
}
)();