/*
 *
 * @author Romal Singla
 * 
 */

scoremeapp.controller('notificationController', ['callAjaxService', 'commonServices', '$window', '$scope', '$location', '$state', '$stateParams', '$rootScope', '$document', function(callAjaxService, commonServices, $window, $scope, $location, $state, $stateParams, $rootScope, $document) {
    // Register a body reference to enable/disable body scroll
    var bodyRef = angular.element($document[0].body);

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $scope.noOfCompanyCount = $window.sessionStorage.getItem("noOfCompanyCount");
    $scope.notifys = JSON.parse($window.sessionStorage.getItem('allNotification'));
    console.log($scope.notifys);
    $scope.filterData = $window.sessionStorage.getItem('filterNotify');
    $scope.sortData = $window.sessionStorage.getItem('sortNotify');
    console.log($scope.notifys);


    $scope.saveNotifyStatus = function(refId, isFlag, isRead, isActive) {
        var payload = {
                refIds: [{
                    refId: refId,
                    isFlag: isFlag,
                    isRead: isRead,
                    isActive: isActive
                }]
            },
            url = "csn/save/notification/status",
            method = 'POST',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {

            if (response.Data.resp_code == 'CS1002') {
                $scope.userRespData = response.Data;
                console.log(response.Data);
                $scope.notifys = response.Data.data;
                // alert(sessionStorage.getItem('currentPaginationPage'));
                $scope.inputPage = sessionStorage.getItem('currentPaginationPage');

                $window.sessionStorage.setItem('allNotification', JSON.stringify(response.Data.data));
                //$state.go($state.current, {}, {reload: true});                     
            }
        })
    }


    $scope.filterNotification = function(status) {
        var payload = "";

        if (status != "") {
            if (status == 'isRead') {
                payload = { isRead: 1 };
                $window.sessionStorage.setItem('filterNotify', 'isRead');
            } else if (status == 'isFlag') {
                payload = { isFlag: 1 };
                $window.sessionStorage.setItem('filterNotify', 'isFlag');
            }
            var url = "csn/save/filter/notification",
                method = 'POST',
                headers = { 'Content-Type': "application/json; charset=utf-8" };
            callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
                $scope.userRespData = response.Data;
                if (response.Data.resp_code == 'CS1002') {
                    console.log(response.Data);
                    $window.sessionStorage.setItem('allNotification', JSON.stringify(response.Data.data));
                    // $state.go($state.current, {}, {reload: true});  
                    // $state.go('notificationState');
                    $scope.notifys = response.Data.data;
                }
            })
        } else if (status == "") {
            $window.sessionStorage.setItem('filterNotify', '');
            callAjaxService.callAjaxFunction("csn/get/main/notification/all", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
                if (response.Data.resp_code === 'CS1002') {
                    console.log(response.Data);
                    $window.sessionStorage.setItem('allNotification', JSON.stringify(response.Data.data));
                    //$state.go($state.current, {}, {reload: true});
                    //$state.go('notificationState');
                    $scope.notifys = response.Data.data;
                }
            });
        }
    }

    $scope.sortNotification = function(status) {

        if (status == "asc") {
            $window.sessionStorage.setItem('sortNotify', 'asc');
            var payload = "";
            var url = "csn/get/main/notification/all/asc",
                method = 'GET',
                headers = { 'Content-Type': "application/json; charset=utf-8" };
            callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
                $scope.userRespData = response.Data;
                if (response.Data.resp_code == 'CS1002') {
                    console.log(response.Data);
                    $window.sessionStorage.getItem('allNotification', JSON.stringify(response.Data.data));
                    // $state.go($state.current, {}, {reload: true});  
                    //$state.go('notificationState');	
                    $scope.notifys = response.Data.data;
                }
            })
        } else if (status == "desc" || status == "") {
            if (status == "desc") {
                $window.sessionStorage.setItem('sortNotify', 'desc');
            } else if (status == "") {
                $window.sessionStorage.setItem('sortNotify', "");
            }
            callAjaxService.callAjaxFunction("csn/get/main/notification/all", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
                if (response.Data.resp_code === 'CS1002') {
                    console.log(response.Data);
                    $window.sessionStorage.setItem('allNotification', JSON.stringify(response.Data.data));
                    //$state.go($state.current, {}, {reload: true});
                    //$state.go('notificationState');
                    $scope.notifys = response.Data.data;
                }
            });

        }
    }





    $scope.items = "10";
    $scope.changeItems = function(items) {
        $scope.itemsPerPage = items;
    }


}])