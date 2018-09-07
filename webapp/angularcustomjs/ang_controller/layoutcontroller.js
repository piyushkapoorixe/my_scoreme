/*
 *
 * @author Romal Singla
 * 
 */

scoremeapp.controller('layoutController', ['callAjaxService', 'commonServices', '$window', '$scope', '$location', '$state', '$stateParams', '$rootScope', '$document', '$timeout', function(callAjaxService, commonServices, $window, $scope, $location, $state, $stateParams, $rootScope, $document, $timeout) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.noOfCompanyCount = $window.sessionStorage.getItem("noOfCompanyCount");
    console.log($rootScope.noOfCompanyCount);
    $scope.showGlobalDiv = false;



    if ($location.absUrl().indexOf('?msg') != -1) {
        console.log("start");
        var data = $location.absUrl().split("?")[1].split("&"),
            msgValue = data[0].split("=")[1],
            username = data[1].split("=")[1];
        callAjaxService.callAjaxFunction("signinws/send/activateaccountmail/" + username + "/" + msgValue, "GET", { 'Content-Type': "application/json; charset=utf-8" }, "").then(
            function successCallback(response) {
                if (response.Data.resp_code === 'CS1002') {
                    show_p_notify('info', response.Data.resp_msg);
                    // $location.absUrl().replace(/\?.*/,"");
                    //console.log($location.absUrl());
                } else {
                    show_p_notify('error', response.Data.resp_msg);
                    $state.go('signInState');
                }
            },
            function errorCallback(response) {
                $state.go('signUpState');
            })
    }


    $scope.logout = function() {
        var payload = "",
            url = "csn/logout/user",
            method = 'GET',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            $scope.userRespData = response.Data;
            if (response.Data.resp_code === 'CS1002') {
                $window.sessionStorage.removeItem("loggedUsername");
                $window.sessionStorage.clear();
                $window.sessionStorage.removeItem("auth-token");
                $state.go('signInState');
                console.log("successfull...");
                show_p_notify('success', response.Data.resp_msg);
            }
        });
    }


    /* $scope.smallHelpSupport = true;
     $scope.bigHelpSupport = false;

     $scope.showBigHelpSupport = function(){
     	
     	
     	 $timeout(function() {
     		 $scope.smallHelpSupport = true; 
           }, 100);
     	 $timeout(function() {
     		 $scope.bigHelpSupport = false;  
          }, 700);
     	
       //$scope.smallHelpSupport = true;  
     };
     
     $scope.showSmallHelpSupport = function(){
     	
     	alert($scope.bigHelpSupport);
     	//$timeout(function() {
     		 $scope.bigHelpSupport = !$scope.bigHelpSupport;  
     		 alert($scope.bigHelpSupport);
         // }, 100);
     	//$timeout(function() {
    		 $scope.smallHelpSupport =  !$scope.smallHelpSupport; 
         // }, 700);
     	
         //$scope.bigHelpSupport = true;  
      };*/




    //$scope.isGlobalPopupVisible = false;
    /*$scope.toggleSelect = function(){
    	  $scope.isGlobalPopupVisible = !$scope.isGlobalPopupVisible;
    	  console.log($scope.isGlobalPopupVisible);
    }*/

    /*$document.on('click', function(event) {
    	 console.log("*************************** = "+event);
    	 if($scope.isGlobalPopupVisible){
            $scope.isGlobalPopupVisible = !$scope.isGlobalPopupVisible;
    	 }
       // return $document.off('click', event);
      });*/

    // $scope.getCredits = function(){

    //  }

}])