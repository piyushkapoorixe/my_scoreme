/*
 * @author Romal Singla
 */



scoremeapp.controller('userDashboardTableController', ['callAjaxService', 'commonServices', 'simpleServices', '$window', '$scope', '$location', '$state', '$stateParams', '$rootScope', 'Upload', '$timeout', '$http', '$document', function(callAjaxService, commonServices, simpleServices, $window, $scope, $location, $state, $stateParams, $rootScope, Upload, $timeout, $http, $document) {

    var companyId = $window.sessionStorage.getItem("companyId");
    //$('#loadingBar').css("display","block");
    // Register a body reference to enable/disable body scroll
    var bodyRef = angular.element($document[0].body);

    //loader starts
    $scope.dataLoading = true;
    // Add our overflow hidden class on loading
    bodyRef.addClass('ovh');

    var filterMonth = $window.sessionStorage.getItem('filter1');
    var filterBusiness = $window.sessionStorage.getItem('filter2');
    var filterIndustry = $window.sessionStorage.getItem('filter3');
    var filterAccountType = $window.sessionStorage.getItem('filter4');
    var filterRange = $window.sessionStorage.getItem('filter5');

    console.log(filterMonth + ',' + filterBusiness + ',' + filterIndustry);
    var url = "";

    if ((filterMonth == "" || filterMonth == undefined)) {
        url = "csn/get/userdashboard/table/default";
    } else {
        url = "csn/get/userdashboard/table/" + filterMonth;
    }

    /*if((filterMonth==""|| filterMonth == undefined) && (filterBusiness == ""||filterBusiness == undefined) && (filterIndustry == "" || filterIndustry == undefined)){
    	url = "csn/get/userdashboard/table/default/default/default";	
    }else if((filterMonth!=""||filterMonth!=undefined) && (filterBusiness==""||filterBusiness == undefined) && (filterIndustry == ""||filterIndustry == undefined)){
    	url = "csn/get/userdashboard/table/default/"+filterMonth+"/default";		 
    }else if((filterMonth==""||filterMonth == undefined) && (filterBusiness!=""||filterBuiness != undefined) && (filterIndustry == "" || filterIndustry == undefined)){
    	url = "csn/get/userdashboard/table/business/default/"+filterBusiness;		
    }else if((filterMonth!=""|| filterMonth != undefined) && (filterBusiness!=""||filterBusiness!=undefined) && (filterIndustry == ""||filterIndustry == undefined)){
    	url = "csn/get/userdashboard/table/business/"+filterMonth+"/"+filterBusiness;	
    }else if((filterMonth=="" || filterMonth == undefined)&& (filterBusiness!="" || filterBusiness != undefined) && (filterIndustry != "" || filterIndustry != undefined)){
    	url = "csn/get/userdashboard/table/industry/default/"+filterIndustry;
    }else if((filterMonth!="" || filterMonth != undefined) && (filterBusiness!="" || filterBusiness !=undefined) && (filterIndustry != "" || filterIndustry != undefined )){
    	url = "csn/get/userdashboard/table/industry/"+filterMonth+"/"+filterIndustry;
    }*/
    var payload = "",
        method = 'GET',
        headers = { 'Content-Type': "application/json; charset=utf-8" };
    callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            if (response.Data.resp_code == "CS1002") {
                $scope.dataLoading = false;
                $scope.scoreTableData = response.Data.data.scorealldata;
                $scope.bankTableData = response.Data.data.bankstatementalldata;
            }
        }, function errorCallback(response) {})
        //}	

    $scope.items = "10";
    $scope.changeItems = function(items) {
        $scope.itemsPerPage = items;
    }


}])