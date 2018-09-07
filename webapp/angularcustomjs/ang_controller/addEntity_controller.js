/*
 * @author Romal Singla
 */

scoremeapp.controller('addEntityController', ['callAjaxService', 'commonServices', '$window', '$scope', '$location', '$rootScope', '$compile', '$state', '$stateParams', '$document', function(callAjaxService, commonServices, $window, $scope, $location, $rootScope, $compile, $state, $stateParams, $document) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.noOfCompanyCount = $window.sessionStorage.getItem("noOfCompanyCount");

    //$('#loadingBar').css("display","block");
    // Register a body reference to enable/disable body scroll
    var bodyRef = angular.element($document[0].body);
    //loader starts
    $scope.dataLoading = true;
    // Add our overflow hidden class on loading
    bodyRef.addClass('ovh');

    //$scope.companyDivCount = 1;
    $scope.noOfEntityDiv = [];
    $scope.noOfEntityDiv.length = 1;
    $scope.length = 1;
    var countEntityDiv = 0;
    $scope.addAnotherEntity = function(index) {
        if ($scope.noOfEntityDiv.length < 5) {
            $scope.noOfEntityDiv.push(countEntityDiv);
            countEntityDiv = countEntityDiv + 1;
            console.log(countEntityDiv);
        }
    }

    $scope.del = function(i) {
        console.log(i);
        $scope.noOfEntityDiv.splice(i, 1);
        $scope.count = $scope.count - 1;
    }

    // ************ Get All Cities Names ***********

    $scope.getCities = function(selectedState, count) {
        var payload = "",
            url = "cs/get/cities/" + selectedState,
            method = 'GET',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            $scope['cityData' + count] = response.Data.data;
        }, function errorCallback(response) {
            console.log(response);
        });
    }

    /* $scope.getIndustryType = function(businessType , count){	
		var payload="" , url ="cs/get/industriesByID/"+businessType , method = 'GET' , headers = {'Content-Type': "application/json; charset=utf-8"};	
	        callAjaxService.callAjaxFunction(url,method,headers,payload).then(function successCallback(response) {
	    	$scope['industryTypeData'+count] = response.Data.data;   
	     }, function errorCallback(response) {
		})			
	}*/




    //console.log(count);
    //*************************************************GET CALL****************************************************//
    // ******* Get All Industry Type ********
    callAjaxService.callAjaxFunction("cs/get/businessIndustryType", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        $scope.buisnessIndustryTypeData = response.Data;
    }, function errorCallback(response) {})

    // ******* Get Business Type Admin ********
    callAjaxService.callAjaxFunction("cs/get/BusinessTypeAdmin", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        console.log(response);
        $scope.dataLoading = false;
        $scope.businessTypeAdminData = response.Data;
    }, function errorCallback(response) {
        console.log(response);
    })

    // ******* Get Business Type ********
    commonServices.getBusinessType().then(function successCallback(response) {
        if (response.Data.resp_code === 'CS1002') {
            console.log(response.Data);
            $scope.businessTypeData = response.Data;
        }
    });

    // ******* get Industry type *******
    $scope.getIndustryType = function(businessType, count) {
        var payload = "",
            url = "cs/get/industriesByID/" + businessType,
            method = 'GET',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            $scope['industryTypeData' + count] = response.Data.data;
        }, function errorCallback(response) {})
    }

    //***********************************************POST CALL***************************************************//
    // ******* add institute type*******
    $scope.addIndustryType = function() {
        var payload = {
                industryGroupId: $scope.businessType,
                industryName: $scope.industryType
            },
            url = "cs/createIndustryType",
            method = 'POST',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            console.log(response);
            $scope.industryRespData = response.Data;
            $scope.businessType = "";
            $scope.industryType = "";
        }, function errorCallback(response) {
            console.log(response);
        })
    }

    // ******* add business type *******
    $scope.addBusinessType = function() {
        var payload = {
                groupName: $scope.businessType,
            },
            url = "cs/createBusinessType",
            method = 'POST',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            console.log(response);
            $scope.industryRespData = response.Data;
            $scope.businessType = "";
        }, function errorCallback(response) {
            console.log(response);
        })
    }

    // ******* add business type *******
    $scope.addCompany = function(isValid, isValidOnSubmit, isPanF, isPanB) {

        if (isValid == true && isValidOnSubmit == true && isPanF != true && isPanB != true) {
            var companyArray = [];
            for (var i = 1; i <= $scope.noOfEntityDiv.length; i++) {
                companyArray.push({
                    companyId: angular.element(document.querySelector('#company_id' + i)).val().toUpperCase(),
                    companyName: angular.element(document.querySelector('#company_name' + i)).val(),
                    industrygroupId: angular.element(document.querySelector('#businessType' + i)).val(),
                    industryId: angular.element(document.querySelector('#industryType' + i)).val().split(":")[1],
                    stateId: angular.element(document.querySelector('#partner_state' + i)).val(),
                    cityId: angular.element(document.querySelector('#partner_city' + i)).val().split(":")[1],
                    companyGroupName: angular.element(document.querySelector('#group_name' + i)).val(),
                });
            }
            console.log(companyArray);
            var payload = companyArray,
                url = "csn/add/company",
                method = 'POST',
                headers = { 'Content-Type': "application/json; charset=utf-8" };
            callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
                console.log(response);
                $scope.industryRespData = response.Data;
                if (response.Data.resp_code == "CS1002") {
                    //if(response.Data.data.length > 1){
                    sessionStorage.setItem('companyId', response.Data.data[0].id);
                    sessionStorage.setItem('companyName', response.Data.data[0].companyName);
                    //   }
                    $scope.account_balance = response.Data.account_balance;
                    //if(response.Data.account_balance > 0){
                    $state.go('mainDashboardState');
                    //}
                    //else{
                    //$state.go('pricingPlanState');
                    //}		       		
                }
                $scope.company_id = "",
                    $scope.company_name = "",
                    $scope.businessType = "",
                    $scope.industryType = "",
                    $scope.partner_state = "",
                    $scope.partner_city = ""
            }, function errorCallback(response) {
                console.log(response);
            })
        }
    }

    var firstTime = 0;
    $scope.groupName = function(organisation_name, index) {
        console.log(organisation_name);

        if (firstTime == 0) {
            for (var i = 1; i <= 5; i++) {
                if (angular.element(document.querySelector('#group_name' + index)).val() == "") {
                    $scope.group_icon = "";
                    $scope.group_name = "";
                } else if (angular.element(document.querySelector('#group_name' + index)).val() != "") {
                    //$scope.group_icon = organisation_name.substring(0,2).toUpperCase();

                    var organisation_display = "",
                        organisation_name2 = "";

                    if (organisation_name.length >= 2) {
                        if (organisation_name.match(" ")) {
                            organisation_name2 = organisation_name.split(" ");
                            if (organisation_name2[0] != "" && organisation_name2[1] != " ") {
                                organisation_display = organisation_name2[0].substr(0, 1) + "" + organisation_name2[1].substr(0, 1);
                                $scope.group_icon = organisation_display.toUpperCase();
                            } else {
                                organisation_display = organisation_name.substr(0, 2);
                                $scope.group_icon = organisation_display.toUpperCase();
                            }
                        } else {
                            organisation_display = organisation_name.substr(0, 2);
                            $scope.group_icon = organisation_display.toUpperCase();
                        }
                    } else if (organisation_name.length == 1) {
                        organisation_display = organisation_name.substr(0, 1);
                        $scope.group_icon = organisation_display.toUpperCase();
                    }

                    $scope.group_name = organisation_name;
                }
            }
            firstTime++;
        }
    }

    $scope.changeGroupIcon = function(organisation_name, index) {
        var organisation_display = "",
            organisation_name2 = "";

        if (organisation_name != "" && organisation_name != undefined) {
            if (organisation_name.length >= 2) {
                if (organisation_name.match(" ")) {
                    organisation_name2 = organisation_name.split(" ");
                    if (organisation_name2[0] != "" && organisation_name2[1] != " ") {
                        organisation_display = organisation_name2[0].substr(0, 1) + "" + organisation_name2[1].substr(0, 1);
                        angular.element(document.querySelector('#group_icon' + index)).text(organisation_display.toUpperCase());
                    } else {
                        organisation_display = organisation_name.substr(0, 2);
                        angular.element(document.querySelector('#group_icon' + index)).text(organisation_display.toUpperCase());
                    }
                } else {
                    organisation_display = organisation_name.substr(0, 2);
                    angular.element(document.querySelector('#group_icon' + index)).text(organisation_display.toUpperCase());
                }
            } else if (organisation_name.length == 1) {
                organisation_display = organisation_name.substr(0, 1);
                angular.element(document.querySelector('#group_icon' + index)).text(organisation_display.toUpperCase());
            }
        } else {
            angular.element(document.querySelector('#group_icon' + index)).text("");
        }

    }

    $scope.checkDuplicatePanNoB = function(panNo) {
        callAjaxService.callAjaxFunction("csn/check/duplicate/panno/" + panNo, 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
            console.log(response);
            if (response['Data'].resp_code == "CS1002") {
                $scope.isPanExist = response['Data'].isPanExist;
            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }

    $scope.checkDuplicatePanNoF = function(id) {
        for (var i = 1; i <= $scope.noOfEntityDiv.length; i++) {
            if (id != i) {
                if (angular.element(document.querySelector('#company_id' + i)).val().toUpperCase() == angular.element(document.querySelector('#company_id' + id)).val().toUpperCase()) {
                    $scope.isPanDuplicate = true;
                    console.log("pan duplicate");
                } else {
                    $scope.isPanDuplicate = false;
                    console.log("no pan duplicate");
                }
            }
        }
    }



    // state API
    var allStateName = $window.sessionStorage.getItem('stateName');
    allStateName = JSON.parse(allStateName);
    if (allStateName != null) {
        if (allStateName['Data'] != null) {
            if (allStateName['Data'].resp_code == "CS1002") {
                console.log("repeat call = " + allStateName);
                $window.sessionStorage.setItem('stateName', JSON.stringify(allStateName));
                $scope.stateData = allStateName.Data;
                // return allStateName;
            }
        } else {
            var payload = "",
                url = "cs/get/states",
                method = 'GET',
                headers = { 'Content-Type': "application/json; charset=utf-8" };
            return callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
                console.log("1st call = " + response);
                if (response['Data'].resp_code == "CS1002") {
                    $scope.stateData = response.Data;
                    $window.sessionStorage.setItem('stateName', JSON.stringify(response));
                }
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    } else {
        var payload = "",
            url = "cs/get/states",
            method = 'GET',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        return callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            console.log("1st call = " + response);
            if (response['Data'].resp_code == "CS1002") {
                $scope.stateData = response.Data;
                $window.sessionStorage.setItem('stateName', JSON.stringify(response));
            }
        }, function errorCallback(response) {
            console.log(response);
        });
    }






}]);