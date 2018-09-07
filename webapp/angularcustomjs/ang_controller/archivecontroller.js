/*
 * @author Romal Singla
 */

scoremeapp.controller('archiveController', ['callAjaxService', 'commonServices', '$window', '$scope', '$location', '$state', '$stateParams', '$rootScope', '$timeout', '$http', '$document', function(callAjaxService, commonServices, $window, $scope, $location, $state, $stateParams, $rootScope, $timeout, $http, $document) {

    var bodyRef = angular.element($document[0].body);
    //loader starts
    $scope.dataLoading = true;
    // Add our overflow hidden class on loading
    bodyRef.addClass('ovh');

    var companyId = $window.sessionStorage.getItem("companyId");

    $scope.archiveReportData = ""
    callAjaxService.callAjaxFunction("csn/get/archive/" + companyId, 'GET', { 'Content-Type': 'application/json; charset=utf-8' }, "").then(function successCallback(response) {

        $scope.dataLoading = false;

        if (response.Data.resp_code = 'CS1002') {
            console.log(response.Data.data);
            $scope.archiveReportData = response.Data.data;
        } else {}
    }, function errorCallback(response) {
        console.log(response);
    })



    //**************************** archive ********************************
    $scope.bankCheckbox = {};
    $scope.applyUnarchive = function() {
        console.log($scope.bankCheckbox);
        var selectedBankReportArray = [];
        angular.forEach($scope.bankCheckbox, function(key, val) {
            if (key) {
                angular.forEach($scope.archiveReportData, function(val1, key1) {
                    if (val1.statuscode == 3 || val1.statuscode == 4) {
                        if (val == val1.refId) {
                            selectedBankReportArray.push(val1.refId);
                        }
                    }
                })
            }
        })

        console.log(selectedBankReportArray);
        var payload = {
            refIds: selectedBankReportArray
        }
        callAjaxService.callAjaxFunction("csn/unarchive/user", 'POST', { 'Content-Type': 'application/json; charset=utf-8' }, payload).then(function successCallback(response) {
            if (response.Data.resp_code = 'CS1002') {
                show_p_notify('success', response.Data.resp_msg);
                $state.go($state.current, {}, { reload: true });
            } else {
                show_p_notify('error', response.Data.resp_msg);
            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }

    $scope.items = "10";
    $scope.changeItems = function(items) {
        $scope.itemsPerPage = items;
    }


}]);