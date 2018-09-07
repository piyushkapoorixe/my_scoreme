/*
 * @author Romal Singla
 */

scoremeapp.controller('companyController', ['callAjaxService', 'commonServices', '$window', '$scope', '$filter', '$location', '$rootScope', '$compile', '$state', '$document', function(callAjaxService, commonServices, $window, $scope, $filter, $location, $rootScope, $compile, $state, $document) {
    // Register a body reference to enable/disable body scroll
    var bodyRef = angular.element($document[0].body);
    //loader starts
    $scope.dataLoading = true;
    // Add our overflow hidden class on loading
    bodyRef.addClass('ovh');
    // ************ when user logout from its current session *************
    if (sessionStorage.getItem('loggedUsername') == null) {
        $state.go('signInState');
    }
    // ************ when user logout from its current session *************


    // call to get primary companies	
    commonServices.getAllPrimaryCompany().then(function successCallback(response) {
        if (response.Data.resp_code === 'CS1002') {
            //loader starts
            $scope.dataLoading = false;
            // Add our overflow hidden class on loading
            bodyRef.removeClass('ovh');
            console.log(response.Data);
            $scope.primaryCompanyData = response.Data.data;
        }
    });


    // ******* Get Business Type ********
    //$scope.businessTypeData = [];
    commonServices.getBusinessType().then(function successCallback(response) {
        if (response.Data.resp_code === 'CS1002') {

            console.log(response.Data);
            $scope.businessTypeData = response.Data.data;
        }
    });

    // ******* get Industry type *******
    var onloadShowSelectedValueCount = 0;
    $scope.getIndustryType = function(businessType, count, data) {

        console.log($.isNumeric(businessType));
        if ($.isNumeric(businessType)) {
            businessType = businessType
        } else {
            businessType = businessType.split("_")[0];
        }
        commonServices.getIndustryType(businessType).then(function successCallback(response) {
            if (response.Data.resp_code === 'CS1002') {
                console.log($scope['industryTypeData' + count]);
                $scope['industryTypeData' + count] = response.Data.data;
                console.log($scope['industryTypeData' + count]);

                //if(onloadShowSelectedValueCount == 0){
                if ($scope['industryTypeData' + count][0].industryId != undefined) {
                    console.log("rrrr = " + $scope['industryTypeData' + count][0].industryId);
                    console.log("running..");
                    $scope.showSelectedValue(data, count, $scope['industryTypeData' + count]);
                    //onloadShowSelectedValueCount++;
                    // }      
                }
            }
        });
    }

    // show selected value
    $scope.showSelectedValue = function(data, index, industryData) {

        angular.element(document.querySelector('#businessType' + index)).val(data.industrygroupId + '_' + data.groupName);
        // console.log(angular.element(document.querySelector('#entityType'+index)).val());
        setTimeout(function() {
            angular.element(document.querySelector('#entityType' + index)).val(data.industryId + '_' + data.industryName).triggerHandler('click');
            //console.log(angular.element(document.querySelector('#entityType'+index)).val());
        }, 0);
    }

    // edit company
    $scope.updateCompany = function(data, compId, index) {

        var businessType = "",
            entityType = "";

        if (data.companyRatingDTOs.length > 0) {
            businessType = data.industrygroupId;
            entityType = data.industryId;
        } else {
            businessType = angular.element(document.querySelector('#businessType' + index)).val().split("_")[0];
            entityType = angular.element(document.querySelector('#entityType' + index)).val().split("_")[0]
        }

        var payload = {
                companyId: data.companyId.toUpperCase(),
                companyName: data.companyName,
                id: compId,
                companyGroupName: data.companyGroupName,
                industrygroupId: businessType,
                industryId: entityType,
            },
            url = "cs/company/update",
            method = 'POST',
            headers = { 'Content-Type': "application/json; charset=utf-8" };
        callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
            if (response.Data.resp_code == "CS1002") {
                show_p_notify('success', response.Data.resp_msg);
                console.log(response);
                angular.forEach(response.Data.data, function(value, i) {
                    if (value.id == compId) {
                        console.log(value)
                        console.log(value.companyName);
                        $window.sessionStorage.setItem('companyId', value.id);
                        $window.sessionStorage.setItem('companyName', value.companyName);
                        $window.sessionStorage.setItem('flag', value.isRating);
                    }
                })

                $state.go($state.current, {}, { reload: true });
            } else {
                show_p_notify('error', response.Data.resp_msg);
            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }


    // delete company

    $scope.deleteCompany = function(compId, index) {
            //loader stops
            // $scope.dataLoading = true;
            // Add our overflow hidden class on loading
            // bodyRef.addClass('ovh');
            // alert(compId)
            var payload = {
                    id: compId,
                },
                url = "cs/company/remove",
                method = 'POST',
                headers = { 'Content-Type': "application/json; charset=utf-8" };
            callAjaxService.callAjaxFunction(url, method, headers, payload).then(function successCallback(response) {
                if (response.Data.resp_code == "CS1002") {
                    //loader stops
                    // $scope.dataLoading = false;
                    // Add our overflow hidden class on loading
                    // bodyRef.removeClass('ovh');
                    console.log(response);
                    angular.element(document.querySelector('#companyTr' + index)).remove();
                    $scope.primaryCompanyData = response.Data.data;

                    if (response.Data.data.length > 0) {
                        //loader stops
                        $scope.dataLoading = false;
                        // Add our overflow hidden class on loading
                        bodyRef.removeClass('ovh');
                        if (compId == sessionStorage.getItem('companyId')) {
                            $window.sessionStorage.setItem('companyId', response.Data.data[0].id);
                            $window.sessionStorage.setItem('companyName', response.Data.data[0].companyName);
                            $window.sessionStorage.setItem('flag', response.Data.data[0].isRating);

                        } else {
                            //loader stops
                            $scope.dataLoading = false;
                            // Add our overflow hidden class on loading
                            bodyRef.removeClass('ovh');
                            $window.sessionStorage.setItem('companyId', $window.sessionStorage.getItem('companyId'));
                            $window.sessionStorage.setItem('companyName', $window.sessionStorage.getItem('companyName'));
                            $window.sessionStorage.setItem('flag', $window.sessionStorage.getItem('flag'));
                        }

                        //angular.forEach(response.Data.data , function(value , i){			        
                        /* if(compId ==  sessionStorage.getItem('companyId')){        	
                  sessionStorage.setItem('companyId',value.id);
		    	  sessionStorage.setItem('companyName',value.companyName);	
				}else{
					
				}
			 })		*/ //loader stops
                        $scope.dataLoading = false;
                        // Add our overflow hidden class on loading
                        bodyRef.removeClass('ovh');
                        show_p_notify('success', response.Data.resp_msg);
                    } else {
                        $state.go('addEntityState');
                    }

                } else {
                    show_p_notify('error', response.Data.resp_msg);
                }
            }, function errorCallback(response) {})
        }
        // ****************** manage entity ****************

    // show selected business options 
    $scope.showBusiness = function(b, key) {
        var selected = [];
        if (b.groupName) {
            selected = $filter('filter')($scope.businessTypeData, { id: b.industrygroupId });
        }
        ///$scope.getIndustryType(selected[0].groupName , key , b);
        return selected.length ? selected[0].groupName : 'Not set';
    };

    // show selected industry options 
    $scope.showIndustry = function(i, key) {
        var selected = [];
        if (i.industryName) {
            console.log($scope['industryTypeData' + key]);
            selected = $filter('filter')($scope['industryTypeData' + key], { id: i.industryId });
        }
        console.log(selected);
        //return selected.length ? selected[0].industryName : 'Not set';
    };

    // validation on pan card
    $scope.checkName = function(data, index, pcdVal, id) {
        if (data !== data.replace(/[a-zA-Z]{5}\d{4}[a-zA-Z]{1}/g, '')) {
            console.log("running if");
            data = data.replace(/[a-zA-Z]{5}\d{4}[a-zA-Z]{1}/g, '');
            angular.element(document.querySelector('#panCardSpan' + index)).html("");
            $scope.updateCompany(pcdVal, id, index);
            // $scope.editButton[key] = !editButton ; 
        } else {
            console.log("running else");
            //return "Please enter valid Pan Card.";
            angular.element(document.querySelector('#panCardSpan' + index)).html("Please enter valid Pan Card.")
        }
    };

    $scope.items = "10";
    $scope.changeItems = function(items) {
        $scope.itemsPerPage = items;
    }

    $scope.removeExtra = function(index, pancard) {
        angular.element(document.querySelector('#panCardSpan' + index)).html("");
        angular.element(document.querySelector('#panCard' + index)).val(pancard);
    }


}])