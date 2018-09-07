/*
 * @author Romal Singla
 */

scoremeapp.controller('admCon', ['callAjaxService', 'commonServices', 'simpleServices', '$window', '$scope', '$location', '$state', '$stateParams', '$rootScope', '$timeout', '$http', '$document', function(callAjaxService, commonServices, simpleServices, $window, $scope, $location, $state, $stateParams, $rootScope, $timeout, $http, $document) {

    var companyId = $window.sessionStorage.getItem("companyId");
    //$('#loadingBar').css("display","block");
    // Register a body reference to enable/disable body scroll
    var bodyRef = angular.element($document[0].body);

    //loader starts
    $scope.dataLoading = true;
    // Add our overflow hidden class on loading
    bodyRef.addClass('ovh');

    callAjaxService.callAjaxFunction("csa/get/institute/all", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        console.log(response.Data.response_msg);
        if (response.Data.resp_code == "CS1002") {
            $scope.instituteData = response.Data.data;

            $scope.aa = "institute";
            //console.log($scope.instituteData);
        } 
    }, function errorCallback(response) {
        console.log(response);
    })


}])