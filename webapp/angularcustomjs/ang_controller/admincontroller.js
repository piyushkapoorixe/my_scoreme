/*
 * @author Romal Singla
 */

scoremeapp.controller('adminController', ['callAjaxService', 'commonServices', 'simpleServices', '$window', '$scope', '$location', '$state', '$stateParams', '$rootScope', '$timeout', '$http', '$document', function(callAjaxService, commonServices, simpleServices, $window, $scope, $location, $state, $stateParams, $rootScope, $timeout, $http, $document) {

    var companyId = $window.sessionStorage.getItem("companyId");
    //$('#loadingBar').css("display","block");
    // Register a body reference to enable/disable body scroll
    var bodyRef = angular.element($document[0].body);

    //loader starts
    $scope.dataLoading = true;
    // Add our overflow hidden class on loading
    bodyRef.addClass('ovh');

    // ******* Get Business Type ********
    commonServices.getBusinessType().then(function successCallback(response) {
        if (response.Data.resp_code === 'CS1002') {
            console.log(response.Data);
            $scope.businessTypeData = response.Data;
        }
    });

    //************ add industry ************
    $scope.addIndustryType = function(valid) {
        console.log(valid);
        if (valid) {
            var payload = {
                industryGroupId: $scope.businessType,
                industryName: $scope.industryType
            }
            console.log("payload = " + JSON.stringify(payload));

            callAjaxService.callAjaxFunction("cs/createIndustryType", 'POST', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {
                if (response.Data.resp_code == "CS1002") {
                    console.log(response.Data.response_msg);
                    $state.go($state.current, {}, { reload: true });
                    show_p_notify('success', response.Data.resp_msg);
                } else {
                    show_p_notify('error', response.Data.resp_msg);
                }
            }, function errorCallback(response) {
                console.log(response);
            })
        }
    }


    callAjaxService.callAjaxFunction("cs/get/businessIndustryType", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        if (response.Data.resp_code == "CS1002") {
            console.log(response.Data.data);
            $scope.businessIndustryTypeData = response.Data.data;
        } else {
            show_p_notify('error', response.Data.resp_msg);
        }
    }, function errorCallback(response) {
        console.log(response);
    })


    //**************** add business type ******************

    $scope.addBusinessType = function(valid) {

        if (valid) {
            var payload = {
                groupName: $scope.BusinessTypeName
            }
            console.log("payload = " + JSON.stringify(payload));
            callAjaxService.callAjaxFunction("cs/createBusinessType", 'POST', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {
                if (response.Data.resp_code == "CS1002") {
                    console.log(response.Data.response_msg);

                    $state.go($state.current, {}, { reload: true });
                    show_p_notify('success', response.Data.resp_msg);
                } else {
                    show_p_notify('error', response.Data.resp_msg);
                }
            }, function errorCallback(response) {
                console.log(response);
            })

        }
    }


    callAjaxService.callAjaxFunction("cs/get/BusinessTypeAdmin", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        if (response.Data.resp_code == "CS1002") {
            console.log(response.Data.data);
            $scope.BusinessTypeAdminData = response.Data.data;
        } else {
            show_p_notify('error', response.Data.resp_msg);
        }
    }, function errorCallback(response) {
        console.log(response);
    })


    // ****************** add institute ***************
    $scope.getCities = function(selectedState) {
        //alert(selectedState);
        var payload = "",
            url = "cs/get/cities/" + selectedState,
            method = 'GET',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            console.log(response);
            $scope.cityData = response.Data;
        }, function errorCallback(response) {
            console.log(response);
        });
    }

    callAjaxService.callAjaxFunction("cs/get/instituteName", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        if (response.Data.resp_code == "CS1002") {
            console.log(response.Data.data);
            $scope.instituteNameData = response.Data.data;
        } else {
            show_p_notify('error', response.Data.resp_msg);
        }
    }, function errorCallback(response) {
        console.log(response);
    })






    $scope.addInstitute = function(valid) {
        if (valid) {
            var payload = {
                instituteName: $scope.instituteName,
                instituteAddress: $scope.instituteAddress,
                stateId: $scope.instituteState,
                cityId: $scope.instituteCity,
                contactPerson: $scope.instituteContactName,
                contactNumber: $scope.instituteContactNumber,
                instituteType: $scope.instituteTypeName
            }
            console.log("payload = " + JSON.stringify(payload));
            callAjaxService.callAjaxFunction("cs/institute/create", 'POST', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {
                if (response.Data.resp_code == "CS1002") {
                    console.log(response.Data.response_msg);

                    $state.go($state.current, {}, { reload: true });
                    show_p_notify('success', response.Data.resp_msg);
                } else {
                    show_p_notify('error', response.Data.resp_msg);
                }
            }, function errorCallback(response) {
                console.log(response);
            })
        }
    }

    //*************** map user institute mapping ****************

    callAjaxService.callAjaxFunction("cs/get/users", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        if (response.Data.resp_code == "CS1002") {
            console.log(response.Data.response_msg);
            $scope.userData = response.Data;
        } else {
            show_p_notify('error', response.Data.resp_msg);
        }
    }, function errorCallback(response) {
        console.log(response);
    })


    callAjaxService.callAjaxFunction("cs/get/instituteName", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        if (response.Data.resp_code == "CS1002") {
            console.log(response.Data.response_msg);
            $scope.instituteData = response.Data;
        } else {
            show_p_notify('error', response.Data.resp_msg);
        }
    }, function errorCallback(response) {
        console.log(response);
    })

    callAjaxService.callAjaxFunction("cs/get/userInstituteMapData", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        if (response.Data.resp_code == "CS1002") {
            console.log(response.Data.response_msg);
            $scope.userInstituteMapData = response.Data.data;
        } else {
            show_p_notify('error', response.Data.resp_msg);
        }
    }, function errorCallback(response) {
        console.log(response);
    })

    $scope.mapUserInstitute = function(valid) {
        if (valid) {
            var payload = {
                id: $scope.userName,
                instituteId: $scope.userInstitute,
            }
            console.log("payload = " + JSON.stringify(payload));
            callAjaxService.callAjaxFunction("cs/add/userInstitute", 'POST', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {
                if (response.Data.resp_code == "CS1002") {
                    console.log(response.Data.response_msg);

                    // $state.go($state.current, {}, {reload: true});
                    show_p_notify('success', response.Data.resp_msg);
                } else {
                    show_p_notify('error', response.Data.resp_msg);
                }
            }, function errorCallback(response) {
                console.log(response);
            })
        }
    }

    callAjaxService.callAjaxFunction("csn/bankstatement/adminpanel", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {

        console.log(response.Data);
        if (response.Data.resp_code == "CS1002") {
            $scope.bankStatement = response.Data.data;
        } else {}
    }, function errorCallback(response) {
        console.log(response);
    })

    callAjaxService.callAjaxFunction("csn/get/allcreditscorerequest", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {

        console.log(response.Data.response_msg);
        if (response.Data.resp_code == "CS1002") {
            $scope.creditScore = response.Data.data;
        } else {}
    }, function errorCallback(response) {
        console.log(response);
    })


    // multiple user mapping

    /*$scope.mapMultipleUserInstitute = function(valid){
	    if(valid){
	    	
	    	var payload=new FormData();
	    	$.each($('#file1')[0].files, function(i, file) {
	    		payload.append('file', file);
	    	});
	    	payload.append('instituteName',$("#instituteNameAjax").val());
	    	
	     	var url= "csn/upload/user/bank/statement" , 
	      	headers = {'Content-Type': undefined}, payload = fileObj;
       
		  console.log("payload = "+ JSON.stringify(payload));
		  callAjaxService.callAjaxFunction(url  ,'POST',headers,payload).then(function successCallback(response) {	
			  if (response.Data.resp_code == "CS1002"){
			  	  console.log(response.Data.response_msg);	 
			  }
		   }, function errorCallback(response) {
			   console.log(response);
		    })
		}  
		  	    
	 }
  */



    $scope.items = "10";
    $scope.itemsI = "10";
    $scope.itemsB = "10";
    $scope.itemsIn = "10";
    $scope.itemsUi = "10";

    $scope.changeItems = function(items) {
        $scope.itemsPerPage = items;
    }


    $scope.hitUrl = function(url) {
        $window.open(url, '_blank');
    }

    $scope.hitConUrl = function(url) {
        $window.open(url, '_blank');
    }


    // state API
    //state API
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








}])