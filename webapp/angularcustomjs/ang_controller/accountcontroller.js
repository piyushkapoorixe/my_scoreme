/*
 * @author Romal Singla
 */

scoremeapp.controller('accountController', ['callAjaxService', 'commonServices', 'simpleServices', '$window', '$scope', '$location', '$rootScope', '$compile', '$state', '$document', '$timeout', function(callAjaxService, commonServices, simpleServices, $window, $scope, $location, $rootScope, $compile, $state, $document, $timeout) {

    // Register a body reference to enable/disable body scroll
    var bodyRef = angular.element($document[0].body);
    // ************ when user logout from its current session *************
    if (sessionStorage.getItem('loggedUsername') == null) {
        $state.go('signInState');
    }
    // ************ when user logout from its current session *************

    var companyId = $window.sessionStorage.getItem("companyId");
    $rootScope.$state = $state;
    $scope.dataLoading = true;
    // Add our overflow hidden class on loading
    bodyRef.addClass('ovh');


    callAjaxService.callAjaxFunction("csn/get/accountdetail/user", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
        if (response.Data.resp_code == "CS1002") {

            var profile = response.Data.data.profile;
            $scope.firstName = profile.firstName;
            $scope.lastName = profile.lastName;
            $scope.emailId = profile.email;
            $scope.phoneNo = profile.mobile;
            $scope.instituteName = profile.instituteName;

            $scope.bankstatementCredits = response.Data.data.bankstatementCredits;
            $scope.bankstatementDebits = response.Data.data.bankstatementDebits;
            $scope.creditscoreCredits = response.Data.data.creditscoreCredits;
            $scope.creditscoreDebits = response.Data.data.creditscoreDebits;

            console.log(response.Data.data.address);
            var address = response.Data.data.address;
            $scope.fullName = profile.firstName + " " + profile.lastName;

            if (address != "") {
                $scope.billingAddress = address.billing_address;
                $scope.mailingAddress = address.mailing_address;
                $scope.gstin = address.gstin_no;
                $scope.billingPincode = address.billing_pincode;
                $scope.getStateAndCountryByPincode(address.billing_pincode, 'billing');
                $scope.getStateAndCountryByPincode(address.mailing_pincode, 'mailing')
                $scope.mailingPincode = address.mailing_pincode;
                $scope.billingCity = address.billing_city;
                $scope.mailingCity = address.mailing_city;
            }
            /*else{	
			$scope.billingAddress = 'NA';
			$scope.mailingAddress = 'NA';
			$scope.gstin = '';
			$scope.billingPincode = '';
	  	    $scope.mailingPincode = '';
		}*/

        }
    }, function errorCallback(response) {
        console.log(response);
    })

    $scope.getStateAndCountryByPincode = function(pincode, type) {
        callAjaxService.callAjaxFunction("csn/getDetailsByPincode/" + pincode, 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {
            if (response.Data.resp_code == "CS1002") {
                console.log(response.Data);
                if (type == 'billing') {
                    $scope.billingStateId = response.Data.stateId;
                    $scope.billingState = response.Data.stateName;
                    $scope.billingCountryId = response.Data.countryId;
                    $scope.billingCountry = response.Data.countryName;
                } else if (type == 'mailing') {
                    $scope.mailingStateId = response.Data.stateId;
                    $scope.mailingState = response.Data.stateName;
                    $scope.mailingCountryId = response.Data.countryId;
                    $scope.mailingCountry = response.Data.countryName;
                }
            }
        }, function errorCallback(response) {
            console.log(response);
        })
    }

    $scope.saveUserAddress = function() {
        var payload = {
            billing_address: $scope.billingAddress,
            billing_pincode: $scope.billingPincode,
            billing_city: $scope.billingCity,
            billing_state: $scope.billingStateId,
            billing_country: $scope.billingCountryId,
            mailing_address: $scope.mailingAddress,
            mailing_pincode: $scope.mailingPincode,
            mailing_city: $scope.mailingCity,
            mailing_state: $scope.mailingStateId,
            mailing_country: $scope.mailingCountryId,
            gstin_no: $scope.gstin
        }
        console.log("payload = " + JSON.stringify(payload));
        callAjaxService.callAjaxFunction("csn/save/user/address", 'POST', { 'Content-Type': "application/json; charset=utf-8" }, payload).then(function successCallback(response) {
            if (response.Data.resp_code == "CS1002") {
                console.log(response.Data.response_msg);
                $('#billingAddressModal').modal('hide');
                $state.go($state.current, {}, { reload: true });
                show_p_notify('success', response.Data.resp_msg);
            } else {
                show_p_notify('error', response.Data.resp_msg);
            }
        }, function errorCallback(response) {
            //show_p_notify('success' , response.Data.resp_msg);
            console.log(response);
        })
    }


    $scope.deactivateAccount = function() {
        callAjaxService.callAjaxFunction("csn/deactivate/account", 'GET', { 'Content-Type': "application/json; charset=utf-8" }, "").then(function successCallback(response) {

            console.log(response.Data.resp_code);

            if (response.Data.resp_code == "CS1002") {
                show_p_notify('success', response.Data.resp_msg);
                $state.go('signInState');
            } else {
                show_p_notify('error', response.Data.resp_msg);
            }

        }, function errorCallback(response) {
            console.log(response);
        })
    }



}])